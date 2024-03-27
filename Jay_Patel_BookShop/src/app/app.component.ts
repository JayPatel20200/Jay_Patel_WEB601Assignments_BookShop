import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
      RouterOutlet,
      ContentListComponent,
      MessageComponent,
      HttpClientModule, 
    HttpClientInMemoryWebApiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'BookShop';
    
}