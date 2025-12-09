import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';


@Component({
  selector: 'app-article',
  imports: [Sidebar],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {

}
