import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';


const ngbModalOptions: NgbModalOptions = {
  backdrop: 'static',
  keyboard: false
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

}