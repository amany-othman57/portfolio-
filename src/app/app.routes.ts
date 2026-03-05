import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/home/home/home.component';
import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'projects', component: ProjectsComponent, title: 'projects' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: '**', component: NotfoundComponent },
];
