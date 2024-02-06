import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypeFilterPipe } from '../type-filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypeFilterPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 1,
        title: "Pride and Prejudice",
        description: "A novel by Jane Austen",
        creator: "Jane Austen",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/1/17/PrideAndPrejudiceTitlePage.jpg",
        type: "Novel",
        tags: ["Fiction", "Romance"]
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        description: "A novel by Harper Lee",
        creator: "Harper Lee",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg/800px-To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg",
        type: "Friction",
        tags: ["Fiction", "Classic"]
      },
      {
        id: 3,
        title: "1984",
        description: "https://i.ebayimg.com/images/g/u6wAAOSwwX1hN7xf/s-l1200.webp",
        creator: "George Orwell",
        imgURL: "https://res.cloudinary.com/jerrick/image/upload/v1678620098/640db5c1a93664001d8e2953.jpg",
        type: "AutoBiography",
        tags: ["Fiction", "Dystopian"]
      },
      {
        id: 4,
        title: "The Great Gatsby",
        description: "A novel by F. Scott Fitzgerald",
        creator: "F. Scott Fitzgerald",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
        type: "Novel",
        tags: ["Fiction", "Classic"]
      },
      {
        id: 5,
        title: "The Catcher in the Rye",
        description: "A novel by J.D. Salinger",
        creator: "J.D. Salinger",
        imgURL: "https://media.npr.org/assets/artslife/books/2009/10/catcher_custom-853c2f7a4f9f9acaa8647dfdc7b9796555ad54a2-s1100-c50.jpg",
        type: "Friction",
        tags: ["Fiction", "Coming-of-age"]
      },
      {
        id: 6,
        title: "To Kill a Mockingbird",
        description: "A novel by Harper Lee",
        creator: "Harper Lee",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg/800px-To_Kill_a_Mockingbird_%281963_US_theatrical_poster%29.jpg",
        type: "AutoBiography",
        tags: ["Fiction", "Classic"]
      }
      
    ];
  }
 
}