import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  herosName:string[] = ['Spiderman','Hulk','She Hulk',"Thor",'Ironman']
  deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.herosName.pop();
    
  }
}
