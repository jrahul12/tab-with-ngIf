import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-with-ng-for',
  templateUrl: './tab-with-ng-for.component.html',
  styleUrls: ['./tab-with-ng-for.component.scss']
})
export class TabWithNgForComponent {

  constructor() { }
  selectedSkill = 'html';

  skills = [
    {
      key: 'html',
      title: '1. HTML',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam sapiente odit maxime aspernatur voluptas earum aliquam distinctio officia recusandae!'
    },
    {
      key: 'css',
      title: '2. CSS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam sapiente odit maxime aspernatur voluptas earum aliquam distinctio officia recusandae!'
    },
    {
      key: 'javascript',
      title: '3. JavaScript',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam sapiente odit maxime aspernatur voluptas earum aliquam distinctio officia recusandae!'
    },
    {
      key: 'angular',
      title: '4. Angular',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam sapiente odit maxime aspernatur voluptas earum aliquam distinctio officia recusandae!'
    }
  ];

  onSelect(skill: string): void {
    this.selectedSkill = skill;
  }


}

