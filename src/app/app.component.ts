import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';
import { AppConstants } from './shared/helpers/constants/constants';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = AppConstants.Titles.AppTitle;

  constructor(public authService: AuthService) { }

}
