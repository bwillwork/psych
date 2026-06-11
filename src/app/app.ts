import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {routes} from './app.routes';
import {NavData} from './types/nav.types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly navData = signal(
    routes
      .filter(r => ((r.data as NavData)['inNav'] ?? false))
      .map(r => ({...(r.data as NavData), link: `/${r.path}`}))
  );

}
