import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  constructor() { }
  selectedSkill: string = 'html';

  onSelect(skill: string): void {
    this.selectedSkill = skill;
  }

}
