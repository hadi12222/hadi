import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {
    // Subscribe to router events to track navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveTab(event.url);
      }
    });
  }

  activeTab: string = 'home'; // Default to home as the active tab

  setActiveTab(url: string) {
    // Extract the route from the URL
    const route = url.split('/')[1];

    // Update the active tab based on the route
    switch (route) {
      case 'home':
        this.activeTab = 'home';
        break;
      case 'search':
        this.activeTab = 'search';
        break;
      case 'watchlist':
        this.activeTab = 'watchlist';
        break;
      default:
        this.activeTab = 'home'; // Default to home if the route is not recognized
        break;
    }
  }
}
