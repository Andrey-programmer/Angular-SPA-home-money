import { Component, Input, OnInit } from '@angular/core';
import { MyEvent } from '../../shared/models/event.model';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'block-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Input() events: MyEvent[] = [];
  constructor() { }


  ngOnInit() {
    this.events.forEach((event) => {
      event.categoryName = this.categories.find(category => category.id === event.category).name;
    });
  }

}
