import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from '../services/event.service';
import { Subject } from 'rxjs';
import { Event } from '../models/events';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent {

  imageFile: File | undefined;
  @ViewChild('fileInput') fileInput: any;
  brandNewEvent: Event;

  // Use imageUrl to dynamically display the selected image
  imageUrl: string;

  constructor(
    public updateDialogRef: MatDialogRef<UpdateEventComponent>,
    private eventService: EventService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Set the initial image URL to the event's image (for preview)
    this.imageUrl = `${'http://localhost:8082/upload-directory'}/${this.data.imageEvent}`;
    data.dateDebEvent = new Date(data.dateDebEvent);
    data.dateFinEvent = new Date(data.dateFinEvent);
  }

  onFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
    if (this.imageFile) {
      // Read the selected image file and update the preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result; // Update imageUrl with the new image
      };
      reader.readAsDataURL(this.imageFile); // Convert the file to base64 URL
    }
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click(); // Trigger file input click event
  }

  resetAvatarImage() {
    // Reset the image preview to the original image URL from the event data
    this.imageUrl = `${'http://localhost:8082/upload-directory'}/${this.data.imageEvent}`;
    this.imageFile = undefined; // Clear the selected file
  }

  closeDialog(): void {
    this.updateDialogRef.close();
  }

  submitForm(formData: any): void {
    formData.value.idEvent = this.data.idEvent;
    this.eventService.updateEvent(formData.value).subscribe({
      next: (res) => {
        this.brandNewEvent = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        let imageUploadCompleted = new Subject();

        if (this.imageFile) {
          this.eventService.uploadImage(this.brandNewEvent.idEvent, this.imageFile).subscribe({
            next: (res) => {
              console.log('Image uploaded');
              console.log(res);
            },
            error: (err) => {
              console.log(err);
            },
            complete: () => {
              imageUploadCompleted.next(null);
              imageUploadCompleted.complete();
            }
          });
        } else {
          imageUploadCompleted.next(null);
          imageUploadCompleted.complete();
        }
        this.updateDialogRef.close(formData);
      }
    });
  }
}
