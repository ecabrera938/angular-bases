import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/form/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
