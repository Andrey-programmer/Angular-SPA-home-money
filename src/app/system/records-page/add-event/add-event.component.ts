import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

import { MyEvent } from '../../shared/models/event.model';
import { Category } from '../../shared/models/category.model';

@Component({
  selector: 'block-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Input() categories: Category[] = [];

  types = [
    {
    type: 'income', label: 'Доход'
    },
    {
    type: 'outcome', label: 'Расход'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const  {amount, description, category, type} = form.value;
    const _amount = Math.abs(amount);

    const event = new MyEvent(type, _amount, +category, moment().format('DD.MM.YYYY HH:mm:ss'), description);
  }

}
