import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
import { Skill } from './skill';
import { Subtask } from './subtask';

@Component({
  selector: 'tasks-section-comp',
  templateUrl: './tasks-section.component.html',
  styleUrls: ['./tasks-section.component.less']
})
export class TasksSectionComponent implements OnInit {

  /** Class members */
  tasks = [
    new Task(
      1,
      1,
      "Migrate blockchain to a new genesis config",
      2,
      [
        new Skill("blockchain"),
        new Skill("docker"),
        new Skill("hyperledger-iroha")
      ],
      null,
      null,
      null,
      "You have to modify permissions for Company role and add a domain to each company with a TaskManager account."
    ),

    new Task(
      2,
      0.25,
      "Create task reusable component.",
      2,
      [
        new Skill("javascript"),
        new Skill("angular"),
        new Skill("html"),
        new Skill("css")
      ],
      null,
      [
        "Denver",
        "El Profesor",
        "Helsinki"
      ]
    ),

    new Task(
      3,
      1,
      "Continue working on the Flask API to add authentication",
      1,
      [
        new Skill("python"),
        new Skill("hyperledger-iroha")
      ],
      null,
      null,
      [
        new Subtask(1, 3, "Retest API to signup"),
        new Subtask(2, 3, "Think about a better message maximum size"),
        new Subtask(3, 3, "Test the 6048 character limit, see if it works ok"),
        new Subtask(4, 3, "Limit voting delay to only 500ms")
      ]
    ),

    new Task(
      4,
      0.33,
      "Complete the Landing Site by binding the buttons to their respective locations",
      3,
      [
        new Skill("html"),
        new Skill("css"),
        new Skill("vue.js")
      ],
      new Date(2020, 7, 28)
    ),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
