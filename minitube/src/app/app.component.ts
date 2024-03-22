import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent],
  templateUrl:'topbar/topbar.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minitube';
imgurl: any;
 
}
