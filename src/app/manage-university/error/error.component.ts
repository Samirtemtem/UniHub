import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit{
  @Input()err:any ;
  ngOnInit(){
    console.log(this.err)
  }
  getErrorMessage() {
    if (this.err.errors) {
      if (this.err.errors.required) {
        return 'Le champ est obligatoire.';
      }
      if (this.err.errors.email) {
        return 'Le champ est de type email.';
      }
      if (this.err.errors.pattern) {
        if (this.err.errors.pattern.requiredPattern === '/^[a-zA-Z]+$/') {
          return 'Le champ doit contenir uniquement des lettres.';
        } else if (this.err.errors.pattern.requiredPattern === '/^[0-9]{8}$/') {
          return 'Le champ doit contenir exactement 8 chiffres.';
        }

      }
    }
    return 'Erreur inconnue.';
  }
}
