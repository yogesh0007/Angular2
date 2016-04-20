import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        Data Service One <input #ramu (keyup.enter)="func(ramu.value)"><br>
        You entered {{tempo}}
    `

})

export class AppComponent {
  private tempo: string;
  func(temp){
        this.tempo = temp;
    }
}
