import { Component, signal } from '@angular/core';
interface Character {
  id: number;
  name: string;
  ability: string;
  power: number
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', ability: 'Kamehameha', power: 9000 },
    { id: 2, name: 'Vegeta', ability: 'Final Flash', power: 8500 },
    { id: 3, name: 'Gohan', ability: 'Masenko', power: 8000 },
    { id: 4, name: 'Piccolo', ability: 'Special Beam Cannon', power: 7000 },
    { id: 5, name: 'Frieza', ability: 'Death Ball', power: 9500 },
  ]);
}
