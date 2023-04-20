import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

@Output()
onDelete: EventEmitter<string> = new EventEmitter()

  @Input()
  characterList: Character[] = [{
    id:'',
    name:'',
    power:0
  }]

  onDeleteCharacter(id?:string):void{
    console.log(id);
    this.onDelete.emit(id)
    
  }

}
