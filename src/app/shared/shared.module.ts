import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MainSharedComponent } from './components/main-shared/main-shared.component';
import { PaginatorModule } from 'primeng/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    MainSharedComponent,
    ChangePasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    RouterModule,
    PaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    NavbarComponent,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    HomeComponent,
    MainSharedComponent,
    PaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    NotFoundComponent
  ],
})
export class SharedModule {}
