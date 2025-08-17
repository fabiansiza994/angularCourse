import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './character-add.html',
  selector: 'dragonball-character-add',
})
export class CharacterAddComponent {
  name = signal('');
  ability = signal('');
  power = signal(0);

  characters = signal<Character[]>([]);

  addCharacter() {
    if (!this.name() || !this.ability() || !this.power()) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      ability: this.ability(),
      power: this.power()
    };
    console.log('Adding character:', newCharacter);
  }

  resetFields() {
    this.name.set('');
    this.ability.set('');
    this.power.set(0);
  }
}