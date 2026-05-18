import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'etudiantPipe'
})
export class EtudiantPipe implements PipeTransform {

  transform(nom: string, prenom: string): string {
    return `github.com/${nom}/${prenom}`;
  }

}
