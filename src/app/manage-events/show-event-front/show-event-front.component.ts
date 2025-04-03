import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-show-event-front',
  templateUrl: './show-event-front.component.html',
  styleUrls: ['./show-event-front.component.scss']
})
export class ShowEventFrontComponent {


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


}
