import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {

  private route=inject(Router) ;
  volverAlInicio(){
    this.route.navigateByUrl('');
  }
}
