import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home/home.component";
import { AboutComponent } from "./components/about/about/about.component";
import { ProjectsComponent } from "./components/projects/projects/projects.component";
import { ContactComponent } from "./components/contact/contact/contact.component";
import { FooterComponent } from "./components/footer/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aya_portfolio';
}
