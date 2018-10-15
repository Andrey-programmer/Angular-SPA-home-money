import { Component, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/models/category.model';


@Component({
  selector: 'block-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})

export class AddCategoryComponent {

  @Output() categoryAdd: EventEmitter<Category> = new EventEmitter<Category>();

  constructor(private categoriesService: CategoriesService) { }


  onSubmit(form: NgForm) {
    // console.log(form.form);
    const name = form.form.controls.name.value;
    const capacity = Math.abs(form.form.controls.capacity.value);
    const category = new Category(name, capacity);
    // console.log(category, name, capacity);



    this.categoriesService.addCategory(category).subscribe((caTegory: Category) => {
      // console.log('caTegory', caTegory);
      form.reset();
      form.form.patchValue({capacity: 1/* , name: 'Vasya' */});
      this.categoryAdd.emit(caTegory);
    });
  }
}
