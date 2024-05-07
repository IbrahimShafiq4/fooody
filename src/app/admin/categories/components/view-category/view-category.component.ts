import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss'],
})
export class ViewCategoryComponent {
  userName: string = '';

  constructor(
    public dialogRef: MatDialogRef<ViewCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Function to close the dialog
  onNoClick(): void {
    this.dialogRef.close();
  }

  // ngOnInit lifecycle hook to initialize component
  ngOnInit(): void {
    // Get username from local storage or set to an empty string
    this.userName = localStorage.getItem('userName') ?? '';

    // Another way to set a value to name FormControl using patchValue()
    // this.addEditForm.get('name')?.patchValue(this.data.name)
  }
}
