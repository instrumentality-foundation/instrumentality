import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'account-details-comp',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.less']
})
export class AccountDetailsComponent implements OnInit {

  faPencilAlt = faPencilAlt;

  constructor() {}

  ngOnInit(): void {
  }

}
