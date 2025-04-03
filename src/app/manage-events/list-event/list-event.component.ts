import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent {

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
