import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebHeaderComponent } from "./components/web-header/web-header.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { MainBodyComponent } from "./components/main-body/main-body.component";
import { WebFooterComponent } from "./components/web-footer/web-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WebHeaderComponent, SideNavComponent, MainBodyComponent, WebFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'playing-with-comp';
}
