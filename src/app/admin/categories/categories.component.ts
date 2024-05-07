import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category/category.service';
import { ToastrService } from 'ngx-toastr';
import {
  ICategoryDataResponse,
  ICategoryRequestParams,
} from './models/category';
import { HttpErrorResponse } from '@angular/common/http';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { ViewCategoryComponent } from './components/view-category/view-category.component';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  first: number = 1;

  rows: number = 10;

  categoryFiltrationValue: string = '';

  myControl = new FormControl();
  filteredCategories: any[] = [];
  categories: any[] = []; // assuming you have a list of categories

  // Main header text will be passed to the main-shared component
  headerText: string = 'Categories';

  // Text header content will be passed to the main-shared component
  headerTextContent: string = 'Item';

  // Main content text will be passed to the main-shared component
  textContent: string =
    'You can now add your items that any user can order it from the Application and you can edit';

  categoryList: ICategoryDataResponse = {
    pageNumber: 0,
    pageSize: 0,
    data: [],
    totalNumberOfPages: 0,
    totalNumberOfRecords: 0,
  };

  constructor(
    private _CategoriesService: CategoryService,
    private _ToastrService: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onGetCategories();
    this.filteredCategories = this.categories;
    this.myControl.valueChanges
      .pipe(
        startWith(''),
        map((value) => this._filter(value))
      )
      .subscribe((filteredCategories) => {
        this.filteredCategories = filteredCategories;
      });
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.categoryList.data.filter((category) =>
      category.name.toLowerCase().includes(filterValue)
    );
  }

  onGetCategories() {
    let requestParams: ICategoryRequestParams = {
      name: this.categoryFiltrationValue,
      pageSize: this.rows,
      pageNumber: this.first / this.rows + 1,
    };
    this._CategoriesService.getOrFilterCategories(requestParams).subscribe({
      next: (res) => (this.categoryList = res),
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () =>
        this._ToastrService.success(
          'The items were successfully retrieved.',
          'Success'
        ),
    });
  }

  openAddCategoryDialog() {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      width: '100%',
      height: '100%',
      maxHeight: '100%',
      maxWidth: '100%',
      data: { edit: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onCreateCategory(result);
      }
    });
  }

  onCreateCategory(categoryData: string) {
    this._CategoriesService.createCategory(categoryData).subscribe({
      next: () => {},
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Category Created Successfully', 'Success');
        this.onGetCategories();
      },
    });
  }

  onDeleteCategory(categoryId: number) {
    this._CategoriesService.deleteCategory(categoryId).subscribe({
      next: (res) => {  },
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Item Deleted Successfully', 'Success');
        this.onGetCategories();
      },
    });
  }

  openEditCategoryDialog(categoryId: number) {
    this._CategoriesService.getSingleCategory(categoryId).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(AddEditCategoryComponent, {
          width: '100%',
          height: '100%',
          maxHeight: '100%',
          maxWidth: '100%',
          data: { name: res.name, edit: true },
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.onUpdateCategory(categoryId, result);
          }
        });
      },
    });
  }

  onUpdateCategory(categoryId: number, updatedName: string) {
    this._CategoriesService.updateCategory(categoryId, updatedName).subscribe({
      next: () => {  },
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Category Updated Successfully', 'Success');
        this.onGetCategories();
      },
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;

    this.onGetCategories();
  }

  onOpenViewCategoryDialog(categoryId: number) {
    this._CategoriesService.getSingleCategory(categoryId).subscribe({
      next: (response) => {
        const dialogRef = this.dialog.open(ViewCategoryComponent, {
          height: '100%',
          width: '100%',
          maxWidth: '100%',
          maxHeight: '100%',
          data: { categoryData: response }
        })

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        })
      }
    })
  }
}
