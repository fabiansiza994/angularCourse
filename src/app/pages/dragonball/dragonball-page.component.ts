import { Component } from '@angular/core';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballComponent {
  // Component logic goes here
  // For example, you can define properties and methods related to the Dragonball page
  title: string = 'Dragonball Page';
  description: string = 'Welcome to the Dragonball page! Here you can find information about your favorite characters and episodes.';

}
