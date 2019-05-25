import { RouterModule, Routes } from '@angular/router';
import { LoteriaComponent } from './components/loteria/loteria.component';



const APP_ROUTES: Routes = [
  { path: 'loteria', component: LoteriaComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
