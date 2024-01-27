import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [ContentListComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentItem: Content[] = [
    {
      id: 6,
      title: "Pride and Prejudice",
      description: "A novel by Jane Austen",
      creator: "Jane Austen",
      imgURL: "https://example.com/pride-and-prejudice.jpg",
      type: "Novel",
      tags: ["Fiction", "Romance"]
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      description: "A novel by Harper Lee",
      creator: "Harper Lee",
      imgURL: "https://example.com/to-kill-a-mockingbird.jpg",
      type: "Novel",
      tags: ["Fiction", "Classic"]
    },
    {
      id: 3,
      title: "1984",
      description: "A dystopian novel by George Orwell",
      creator: "George Orwell",
      imgURL: "https://example.com/1984.jpg",
      type: "Novel",
      tags: ["Fiction", "Dystopian"]
    },
    {
      id: 4,
      title: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald",
      creator: "F. Scott Fitzgerald",
      imgURL: "https://example.com/the-great-gatsby.jpg",
      type: "Novel",
      tags: ["Fiction", "Classic"]
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger",
      creator: "J.D. Salinger",
      imgURL: "https://example.com/the-catcher-in-the-rye.jpg",
      type: "Novel",
      tags: ["Fiction", "Coming-of-age"]
    },
    {
      id: 6,
      title: "To Kill a Mockingbird",
      description: "A novel by Harper Lee",
      creator: "Harper Lee",
      imgURL: "https://example.com/to-kill-a-mockingbird.jpg",
      type: "Novel",
      tags: ["Fiction", "Classic"]
    }
  ];

  ngOnInit(): void {
  }
}
