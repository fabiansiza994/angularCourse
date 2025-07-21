import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
    counter = 10;
    counterSignal = signal(10);

    increaseCounter(value: number) {
        this.counter += value;

        this.counterSignal.update(currentValue => currentValue + value);
    }

    resetCounter(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}