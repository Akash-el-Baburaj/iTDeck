import { Component } from '@angular/core';

interface ribbonItem extends Variant {
  direction: string;
}
@Component({
  selector: 'app-widget-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent {
  ribbonVariants: ribbonItem[] = [];

  constructor() {}

  ngOnInit() {
    this.ribbonVariants = [
      {
        name: 'Primary',
        color: 'primary',
        direction: 'left'
      },
      {
        name: 'Success',
        color: 'success',
        direction: 'right'
      },
      {
        name: 'Info',
        color: 'info',
        direction: 'right'
      },
      {
        name: 'Warning',
        color: 'warning',
        direction: 'left'
      },
      {
        name: 'Danger',
        color: 'danger',
        direction: 'right'
      },
      {
        name: 'Dark',
        color: 'dark',
        direction: 'right'
      },
      {
        name: 'Secondary',
        color: 'secondary',
        direction: 'left'
      }
    ];
  }
}
export interface Variant {
  name: string;
  color: string;
}