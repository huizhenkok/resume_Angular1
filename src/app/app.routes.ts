import { Routes } from '@angular/router';

// 👇 注意这里：把 HomeComponent 改成 Home
import { Home } from './pages/home/home';
import { Hobbies } from './pages/hobbies/hobbies';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },          // 这里也改成 Home
  { path: 'hobbies', component: Hobbies }, // 这里也改成 Hobbies
  { path: 'contact', component: Contact }, // 这里也改成 Contact
  { path: '**', redirectTo: '' }
];
