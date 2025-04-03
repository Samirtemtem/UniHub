import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent {
  eventId: any;
  currentEvent: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService
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

  shareFb(id: any): void {
    this.eventService.shareFb(id).subscribe(
      (res) => {
        //;
      }
      // handle errors...
    );
  }
}
