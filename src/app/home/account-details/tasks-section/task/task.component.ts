import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as randomColor from "randomcolor";
import { Task } from '../task';
import { Subtask } from '../subtask';

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

  ngOnInit(): void {
    this.colors = randomColor({luminosity: 'dark', count: this.task.skills.length});
  }

  public toggleSubtask(event : Event, subtaskId : number) {
    var checkbox = event.target as HTMLInputElement;
    var subtask = this.task.subtasks.find( subtask => subtask.id == subtaskId);
    if (checkbox.checked) {
      subtask.state = true;
    }
    else{
      subtask.state = false;
    }
  }

  ngAfterViewInit(): void {
  }

}
