import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';


import { ChangeDetectorRef } from '@angular/core';
import { OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-event-front',
  templateUrl: './show-event-front.component.html',
  styleUrls: ['./show-event-front.component.scss']
})
export class ShowEventFrontComponent implements OnInit, OnDestroy {


  eventId: any;
  currentEvent: any;
  interval: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private cdr: ChangeDetectorRef // inject ChangeDetectorRef
  ) {
    this.eventId = this.activatedRoute.snapshot.params['id'];

    this.eventService
      .getEvent(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentEvent = res;
          // this.dataSource = new MatTableDataSource(this.eventsList);
          // this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }


    ngOnInit(): void {
  
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

}
