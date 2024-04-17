import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private router: Router) { }
  search(value: string) {
    this.router.navigateByUrl('/search/' + value);//oka router to inko router ki navigate kavadaniki idhi use chestham
  }

}
