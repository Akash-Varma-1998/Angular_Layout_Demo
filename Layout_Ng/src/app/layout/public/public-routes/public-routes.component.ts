import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { FooterComponent } from '../../../shared/component/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-routes',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './public-routes.component.html',
  styleUrl: './public-routes.component.scss'
})
export class PublicRoutesComponent {

}
