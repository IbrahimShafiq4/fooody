import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-shared',
  templateUrl: './main-shared.component.html',
  styleUrls: ['./main-shared.component.scss'],
})

export class MainSharedComponent {
  // Input property to receive the main header text
  @Input() mainHeader!: string;

  // Input property to receive the main text header
  @Input() mainTextHeader!: string;

  // Input property to receive the main text content
  @Input() mainTextContent!: string;
}
