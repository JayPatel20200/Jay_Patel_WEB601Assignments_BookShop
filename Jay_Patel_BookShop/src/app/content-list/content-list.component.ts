import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypeFilterPipe } from '../type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { UnderLineDirective } from '../under-line.directive';
import { BookServiceService } from '../services/book-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypeFilterPipe, FormsModule, UnderLineDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  // book:Observable<any>;
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }

  @Input() contentItems: Content[] = [];
  @Input() items:Content[] = [];
  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;
  id:any;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  getBookById(){
   return 
  // console.log("Clicked");
  }
  

  constructor (private BookService:BookServiceService){ }
  ngOnInit() {
    this.BookService.getContentObs().subscribe(content => this.contentItems = content);
    this.BookService.getContentById(3).subscribe(content=> this.items = content);
    console.log(this.items);
  }
 
}