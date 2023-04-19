import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: 
    `<h1>Contador</h1>
    <h3> La base es: {{base}} </h3>
    <h3>{{numero}}</h3>
    <button (click)="agregar(base)"> +{{base}} </button>
    <button (click)="agregar(base * -1)"> -{{base}} </button>
    <button (click)="reset()">Reset</button>`
})
export class CounterComponent {

    numero: number = 0;
    base: number = 3;

    agregar(valor: number) {
        this.numero += valor
    }
    reset() {
        this.numero = 0
    }

}