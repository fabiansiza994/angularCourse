import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.components';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [
    {
      path: '',
      component: CounterPageComponent,
    },
    {
      path: 'hero',
      component: HeroPageComponent
    },
    {
      path: 'dragonball',
      component: DragonballComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
];