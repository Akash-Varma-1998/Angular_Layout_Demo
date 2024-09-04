import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { SidebarComponent } from '../../../shared/component/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-private-routes',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent, RouterOutlet, MatIconModule],
  templateUrl: './private-routes.component.html',
  styleUrl: './private-routes.component.scss',
})
export class PrivateRoutesComponent {
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
