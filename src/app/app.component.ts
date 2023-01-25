import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'Jhonanderson';
  age = 27;
  img = 'https://estaticosgn-cdn.deia.eus/clip/7ec1e586-aac0-4975-84ee-cb9efb15fa85_16-9-aspect-ratio_default_0.jpg ';
  btnDisabled = true;
  sizeProfile = 100;
  person = {
    name: 'Jhonanderson',
    age: 27,
    avatar: 'https://estaticosgn-cdn.deia.eus/clip/7ec1e586-aac0-4975-84ee-cb9efb15fa85_16-9-aspect-ratio_default_0.jpg '
  }

  toggle(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age ++;
  }

}
