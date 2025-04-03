import { Specialite } from 'app/manage-specialite/models/specialite';

export class Matiere {
  id!: number;
  nom!: string;
  ects!: number;
  description!: string;
  imageUrl!: string;
  specialite!: Specialite;
}
