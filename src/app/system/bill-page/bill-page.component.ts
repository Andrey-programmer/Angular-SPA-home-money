import { combineLatest } from 'rxjs/index';
import { Subscription } from 'rxjs-compat';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Bill } from '../shared/models/bill.model';
import { BillService } from '../shared/services/bill.service';

@Component({
  selector: 'block-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private billServise: BillService) { }

  ngOnInit() {
    this.subscription = combineLatest(
      this.billServise.getBill(),
      this.billServise.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
