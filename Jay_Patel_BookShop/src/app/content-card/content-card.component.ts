import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "The Alchemist",
      description:"Quest for personal legend unfolds.",
      creator:"Paulo Coelho",
      imgURL:"app/content-card/photo/",
      type:"Fiction"
    });
    this.contentList.addContent({
      id: 1,
      title: "1984",
      description:"Dystopian surveillance challenges individual freedom.",
      creator:"George Orwell",
      imgURL:"app/content-card/photo/",
      type:"Dystopian Fiction"
    });
    this.contentList.addContent({
      id: 2,
      title: "To Kill a Mockingbird",
      description:"Southern racial injustice witnessed by young Scout.",
      creator:"Harper Lee",
      imgURL:"app/content-card/photo/",
      type:"Classic"
    });
  }
}
