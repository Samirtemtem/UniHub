import { ChangeDetectorRef } from '@angular/core';
import { EventService } from '../services/event.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit, OnDestroy {

  eventsList: any;
  interval: any;

  constructor(
    private eventService: EventService,
    private cdr: ChangeDetectorRef // inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.eventsList = [];
    this.refreshEventsList();
    this.loadEvents(); 

    // Start interval to trigger view update every second
    this.interval = setInterval(() => {
      // This will force Angular to re-render the template
      this.cdr.detectChanges(); // <--- Force the view to update
    }, 1000);

  }

  ngOnDestroy(): void {
    // Clean up the interval
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  refreshEventsList(): void {
    this.eventService.getAllEvents().subscribe(
      (events) => {
        // this.dataSource.data = clubs;
        // this.dataSource.paginator = this.paginator;
        this.eventsList = events;
        console.log(this.eventsList);
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des clubs:",
          error
        );
      }
    );
  }

  ////////////////// Event Countdown  /////////////////////////////////////////////////////////////////////////////////////////////////

  // Function to calculate the countdown
  getCountdown(startDate: string): string {
    const now = new Date();
    const start = new Date(startDate);
    const timeDiff = start.getTime() - now.getTime();
    
    if (timeDiff <= 0) {
      return "Event has started!";
    }

    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Function to check if event has ended
  isEventEnded(startDate: string, endDate: string): boolean {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    return now > end;
  }

  getEventStatus(start: string, end: string): 'not-started' | 'ongoing' | 'ended' {
    const now = new Date().getTime();
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
  
    if (now < startTime) return 'not-started';
    if (now >= startTime && now <= endTime) return 'ongoing';
    return 'ended';
  }
  

  getTextColor(start: string, end: string): string {
    const status = this.getEventStatus(start, end);
    if (status === 'not-started') return 'green';
    if (status === 'ongoing') return 'orange';
    return 'red';
  }
  
  ////////////////// Pagination  /////////////////////////////////////////////////////////////////////////////////////////////////
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalItems: number = 0;
  paginatedEvents: any[] = [];

  loadEvents() {
    // For example, populate the eventsList with mock data
    this.eventsList = [
      // Your event objects here...
    ];
    this.totalItems = this.eventsList.length;
    this.updatePaginatedEvents();
  }

  updatePaginatedEvents() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedEvents = this.eventsList.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.currentPage = page;
      this.updatePaginatedEvents();
    }
  }

  getTotalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
}
