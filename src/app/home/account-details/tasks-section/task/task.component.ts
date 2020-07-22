import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as randomColor from "randomcolor";
import { Task } from '../task';

@Component({
  selector: 'task-comp',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit, AfterViewInit {

  @Input() task: Task

  constructor() { }

  private colors : any;
  private taskElement : HTMLElement;
  private checkboxes : Array<HTMLInputElement>

  private saveCheckedState() : void {
    localStorage.setItem(this.task.id.toString() + "checkboxes", )
  }

  ngOnInit(): void {
    this.colors = randomColor({luminosity: 'dark', count: this.task.skills.length});
  }

  ngAfterViewInit(): void {

  }

}
