import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
})
export class UsernameComponent {
  name = 'Robert';
  onUsernameInput(event:any){
    this.name = event.target.value;
  }
}
