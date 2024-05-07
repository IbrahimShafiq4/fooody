import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

// Define interface for menu items
interface IMenu {
  text: string;
  icon: string;
  link: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // Event emitter to notify parent component about sidebar collapse state
  @Output() sidebarCollapsed: EventEmitter<boolean> = new EventEmitter();
  // Getting the Aside Tag From Html
  @ViewChild('aside') asideElement!: ElementRef;

  // Variable to track sidebar collapse state
  collapsed: boolean = false;
  asideWidth: number = 0;
  textLinkVisibility: boolean = false;

  constructor(private _AuthService: AuthService) {}

  ngOnInit() {}

  // HostListener to detect window resize and adjust sidebar accordingly
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.asideWidth = this.asideElement.nativeElement.offsetWidth;

    // Check if the sidebar width is less than or equal to 182 pixels
    // If true, show only icons and hide text
    if (this.asideWidth <= 182) {
      this.textLinkVisibility = true;
    } else {
      this.textLinkVisibility = false;
    }
  }

  // Check if user is admin
  isAdmin(): boolean {
    return this._AuthService.role == 'SuperAdmin' ? true : false;
  }

  // Check if user is regular user
  isUser(): boolean {
    return this._AuthService.role == 'SystemUser' ? true : false;
  }

  // Sidebar menu items
  menu: IMenu[] = [
    {
      text: 'Home',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      text: 'Users',
      link: '/dashboard/admin/users',
      icon: 'fa-solid fa-users',
      isActive: this.isAdmin(),
    },
    {
      text: 'Recipes',
      link: '/dashboard/user/user-recipes',
      icon: 'fa-solid fa-grip-vertical',
      isActive: this.isUser(),
    },
    {
      text: 'Favorites',
      link: '/dashboard/user/fav',
      icon: 'fa-solid fa-heart',
      isActive: this.isUser(),
    },
    {
      text: 'Recipes',
      link: '/dashboard/admin/recipes',
      icon: 'fa-solid fa-grip-vertical',
      isActive: this.isAdmin(),
    },
    {
      text: 'Categories',
      link: '/dashboard/admin/categories',
      icon: 'fa-solid fa-layer-group',
      isActive: this.isAdmin(),
    },
  ];

  // Method to toggle sidebar collapse
  collapsing(): void {
    this.collapsed = !this.collapsed;
    this.sidebarCollapsed.emit(this.collapsed);
  }
}
