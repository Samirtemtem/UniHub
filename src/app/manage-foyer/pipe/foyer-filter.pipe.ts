import { Pipe, PipeTransform } from '@angular/core';
import { Foyer } from '../model/Foyer';

@Pipe({
  name: 'foyerFilter'
})
export class FoyerFilterPipe implements PipeTransform {

  transform(foyers: Foyer[], searchTerm: string): Foyer[] {
    if (!foyers || !searchTerm) {
      return foyers;
    }

    return foyers.filter(
      (foyer) =>
        foyer.nomFoyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        foyer.capacityFoyer.toString().includes(searchTerm)
       // foyer.superficie.toString().includes(searchTerm)
    );
  }
}
