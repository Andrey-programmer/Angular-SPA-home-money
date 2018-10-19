import { combineLatest } from 'rxjs';
import { Subscription } from 'rxjs-compat';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { MyEvent } from '../shared/models/event.model';
import { CategoriesService } from '../shared/services/categories.service';
import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'block-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  events: MyEvent[] = [];
  chartData = [];

  isLoaded = false;
  isFilterVisible = false;

  sub1: Subscription;

  constructor(private categoriesService: CategoriesService, private eventsService: EventsService) { }

  ngOnInit() {
   this.sub1 = combineLatest(
      this.categoriesService.getCategories(),
      this.eventsService.getEvents()
    ).subscribe((data: [Category[], MyEvent[]]) => {
      this.categories = data[0];
      this.events = data[1];

      this.calculateChatData();

      this.isLoaded = true;
    });
  }

  calculateChatData(): void {
    this.chartData = [];
    this.categories.forEach((category) => {
        const categoryEvents = this.events.filter((event) => event.category === category.id && event.type === 'outcome');
        this.chartData.push({
          name: category.name,
          value: categoryEvents.reduce((total, event) => {
            total += event.amount;
            return total;
          }, 0)
        });
    });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  private toggleFilterVisible(dir: boolean) {
    this.isFilterVisible = dir;
  }

  openFilter() {
    this.toggleFilterVisible(true);
  }


  onFilterApply() {
    this.toggleFilterVisible(true);
  }

  onFilterCancel() {
    this.toggleFilterVisible(false);
  }

}
