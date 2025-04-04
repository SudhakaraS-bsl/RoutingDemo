import { Routes } from '@angular/router';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

export const routes: Routes = [
    { path: '', component: Tab1Component },
    { path: 'Tab1', component: Tab1Component },
    { path: 'Tab2', component: Tab2Component }
];
