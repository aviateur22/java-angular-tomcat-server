import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  message: string = '';

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getHomeMessage().subscribe(res=> this.message = res);
  }

}
