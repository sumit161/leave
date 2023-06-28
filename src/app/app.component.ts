import { Component } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  IslogIn!: boolean;
  title = 'Test1';
  constructor(private _loaderService: LoaderService) {}
  ngOnInit(): void {
    this._loaderService.isLogInStatus.subscribe((res) => {
      this.IslogIn = res;
      // console.log(this.IslogIn);

    });
  }
}
