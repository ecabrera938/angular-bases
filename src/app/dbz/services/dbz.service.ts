import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  characteres: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 950,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 400,
    },
  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = { id: uuid(),...character}

    this.characteres.push(newCharacter);
  }
//   onDeleteCharacter(index: number): void {
//     console.log('MAinPAge');
//     console.log(index);
//     this.characteres.splice(index, 1);
//   }
deleteCharacterById(id:string){
    this.characteres = this.characteres.filter( character => character.id !== id)
}

}
