import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AddEventDialogDashComponent } from '../manage-events/add-event-dialog-dash/add-event-dialog-dash.component';
import { UpdateEventDialogDashComponent } from '../manage-events/update-event-dialog-dash/update-event-dialog-dash.component';
import { Club } from '../models/club';
import { ClubService } from '../services/club.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-club-detail-front',
  templateUrl: './club-detail-front.component.html',
  styleUrls: ['./club-detail-front.component.scss'],
})
export class ClubDetailFrontComponent {
  dataSource: any;
  displayedColumns: string[] = [
    'nom',
    'dateDeb',
    'dateFin',
    'description',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  brandNewSpecialite: any;
  uploadUrl = 'http://localhost:3000/upload-directory/';
  currentClub: Club | null;
  eventsList: Event[];
  filtredEventsList: Event[];
  searchInput: string = '';

  constructor(
    private addEventDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private clubService: ClubService,
    private eventService: EventService,
    private updateEventDialog: MatDialog
  ) {
    this.eventsList = [];
  }

  ngOnInit(): void {
    this.refreshEventList();
  }

  refreshEventList(): void {
    this.clubService
      .getClub(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (res) => {
          this.currentClub = res;
          this.eventsList = [];
          this.eventsList.push(...res.evenements);
          console.log(this.eventsList);
          this.dataSource = new MatTableDataSource(this.eventsList);
          this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  openAddEventDialog(): void {
    const dialogRef = this.addEventDialog.open(AddEventDialogDashComponent, {
      width: '550px',
      data: this.currentClub,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result after the dialog is closed (if needed)
      if (result) {
        this.refreshEventList();
        console.log('The dialog save pressed', result);
      } else {
        console.log('The dialog was closed', result);
      }
    });
  }

  onDeleteEvent(id: any): void {
    this.eventService.deleteEvent(id).subscribe(
      () => {
        this.refreshEventList();
      }
      // handle errors...
    );
  }

  openUpdateDialog(eventId: any): void {
    this.eventService.getEvent(eventId).subscribe(
      (eventData) => {
        const dialogRef = this.updateEventDialog.open(
          UpdateEventDialogDashComponent,
          {
            width: '550px',
            data: eventData,
          }
        );

        // Vous pouvez également écouter la fermeture du dialogue si nécessaire
        dialogRef.afterClosed().subscribe((result) => {
          this.refreshEventList();
          console.log('Dialog closed with result:', result);
        });
      },
      (error) => {
        console.error('Error fetching club data:', error);
      }
    );
  }
}
