import { ApplicationRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidebarComponent,NavbarComponent,NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DesiHuddlesAdmin_UI';
  constructor(private appRef:ApplicationRef){
    
  }
}
