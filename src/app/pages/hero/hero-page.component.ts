import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    styleUrls: ['./hero-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    spidyName = 'Spiderman';
    spidyAge = 22;

    capitalizeName = (name: string) => name.toUpperCase();

    getHeroDescription() {
        return `${this.name()} is ${this.age()} years old`;
    }

    changeHero() {
        this.name.set(this.spidyName);
        this.age.set(this.spidyAge);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge() {
        this.age.set(60);
    }

    getCapitalizedName() {
        return this.capitalizeName(this.name());
    }
}