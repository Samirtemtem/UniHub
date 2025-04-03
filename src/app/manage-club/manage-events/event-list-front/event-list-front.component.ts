import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list-front',
  templateUrl: './event-list-front.component.html',
  styleUrls: ['./event-list-front.component.scss'],
})
export class EventListFrontComponent {
  eventsList: any;
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventsList = [];
    this.refreshEventsList();
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
}
