import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent]
})
export class DragonballSuperComponent {

  name = signal('');
  ability = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', ability: 'Kamehameha', power: 9000 },
    { id: 2, name: 'Vegeta', ability: 'Final Flash', power: 8500 }
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
