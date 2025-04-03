import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatiereService } from '../services/matiere.service';
import { Matiere } from '../models/matiere';

@Component({
  selector: 'app-matiere-detail-front',
  templateUrl: './matiere-detail-front.component.html',
  styleUrls: ['./matiere-detail-front.component.scss'],
})
export class MatiereDetailFrontComponent implements OnInit {
  constructor(
    private matiereService: MatiereService,
    private activedRoute: ActivatedRoute
  ) {}
  uploadUrl = 'http://localhost:8082/upload-directory/';
  currentMatiere: Matiere;

  ngOnInit(): void {
    this.matiereService
      .getById(this.activedRoute.snapshot.params['id'])
      .subscribe({
        next: (res) => {
          this.currentMatiere = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
