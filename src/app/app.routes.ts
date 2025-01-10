import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormUpdateComponent } from './components/form-update/form-update.component';



export const routes: Routes = 
[
    {path: '', component: MainComponent},
    {path: 'update/:id', component: FormUpdateComponent}
    
];
