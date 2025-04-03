import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from '../models/events';
import { EventService } from '../services/event.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent {

  imageFile: File | undefined;
  @ViewChild('fileInput') fileInput: any;
  eventData: any;
  eventId: any;
  brandNewEvent: Event;

  constructor(
    public updateDialogRef: MatDialogRef<UpdateEventComponent>,
    private eventService: EventService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    data.dateDebEvent = new Date(data.dateDebEvent);
    data.dateFinEvent = new Date(data.dateFinEvent);
  }

  uploadUrl = 'http://localhost:8082/upload-directory';
  imageUrl = `${this.uploadUrl}/${this.data.imageEvent}`;

  onFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
    if (this.imageFile) {
      // Read the selected image file and update the preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  resetAvatarImage() {
    this.imageUrl = `${this.uploadUrl}/${this.data.imageClub}`;
    this.imageFile = undefined;
  }

  closeDialog(): void {
    this.updateDialogRef.close();
  }

  submitForm(formData: any): void {
    console.log('testUpdate');

    console.log(formData.value);
   /** if (!this.imageFile) {
      formData.value.imageClub = 'specDefaultImg.png';
    }**/
    formData.value.idEvent = this.data.idEvent;
    this.eventService
      .updateEvent(formData.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.brandNewEvent = res;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          let imageUploadCompleted = new Subject();

          if (this.imageFile) {
            this.eventService
              .uploadImage(this.brandNewEvent.idEvent, this.imageFile)
              .subscribe({
                next: (res) => {
                  console.log('1_image upload********************');
                  console.log(res);
                },
                error: (err) => {
                  // console.log(err);
                },
                complete: () => {
                  imageUploadCompleted.next(null);
                  imageUploadCompleted.complete();
                },
              });
          } else {
            imageUploadCompleted.next(null);
            imageUploadCompleted.complete();
          }
          this.updateDialogRef.close(formData);
        },
      });
    // }
  }
}
