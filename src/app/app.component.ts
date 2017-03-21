import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '🎶Fill Up My Chart Put Some Data In It🎶';
  private arraySeries: any[] = [{
    name: 'puppy',
    data: [47, 53, 59, 54, 67, 48]
    },{
    name: 'cookie',
    data: [48, 54, 100, 45, 57, 48]
    },{
    name: 'taco',
    data: [76, 56, 59, 70, 66, 63]
    },{
    name: 'monkey',
    data: [60, 61, 65, 62, 63, 61]
    },{
    name: 'kitten',
    data: [17, 17, 17, 15, 17, 14]
  }];

  private arrayCategories: string[] = [
    'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'
  ];

  private userCategories: string[] = [
    'puppy', 'cookie', 'taco', 'monkey', 'kitten'
  ];
}
