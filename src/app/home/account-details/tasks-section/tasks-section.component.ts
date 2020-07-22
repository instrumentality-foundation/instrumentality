import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
import { Skill } from './skill';

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
      [
        0.02,
        0.02,
        0.02
      ]
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
      [
        0.02,
        0.02,
        0.02,
        0.02
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
      [
        0.01,
        0.01,
      ],
      null,
      null,
      [
        "Retest API to signup",
        "Think about a better message maximum size",
        "Test the 6048 character limit, see if it works ok",
        "Limit voting delay to only 500ms"
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
      [
        0.05,
        0.05,
        0.05
      ],
      new Date(2020, 7, 28)
    ),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
