import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../services/actualite.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualite-details',
  templateUrl: './actualite-details.component.html',
  styleUrls: ['./actualite-details.component.scss'],
})
export class ActualiteDetailsComponent {
  currentActualite: any;
  actualiteId: any;
  constructor(
    private actualiteService: ActualiteService,
    private activatedRoute: ActivatedRoute
  ) {
    this.actualiteId = this.activatedRoute.snapshot.params['id'];

    this.actualiteService
      .getActualite(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentActualite = res;
          // this.dataSource = new MatTableDataSource(this.eventsList);
          // this.dataSource.paginator = this.paginator;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  shareFb(id: any): void {
    this.actualiteService.shareFb(id).subscribe(
      (res) => {
        //;
      }
      // handle errors...
    );
  }
}
