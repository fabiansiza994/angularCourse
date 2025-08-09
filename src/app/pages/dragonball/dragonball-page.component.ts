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

  name = signal('Dragon Ball');
  ability = signal('Kamehameha');
  power = signal(9000);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', ability: 'Kamehameha', power: 9000 },
    { id: 2, name: 'Vegeta', ability: 'Final Flash', power: 8500 },
    { id: 3, name: 'Gohan', ability: 'Masenko', power: 8000 },
    { id: 4, name: 'Piccolo', ability: 'Special Beam Cannon', power: 7000 },
    { id: 5, name: 'Frieza', ability: 'Death Ball', power: 9500 },
    { id: 6, name: 'Cell', ability: 'Solar Kamehameha', power: 9000 },
    { id: 7, name: 'Majin Buu', ability: 'Planet Burst', power: 10000 },
    { id: 8, name: 'Trunks', ability: 'Burning Attack', power: 7500 },
    { id: 9, name: 'Krillin', ability: 'Destructo Disc', power: 6000 },
    { id: 10, name: 'Yamcha', ability: 'Wolf Fang Fist', power: 500 }
  ]);

  addCharacter() {
    if(!this.name() || !this.ability() || !this.power()) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      ability: this.ability(),
      power: this.power()
    };
    this.characters.update(chars => [...chars, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.ability.set('');
    this.power.set(0);
  }
}
