import { Component, OnInit } from '@angular/core';
import {EmployeeAddComponent} from '../employee/employee-add/employee-add.component';
import {EmployeeService} from '../services/employee.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {MaterialTypeAddComponent} from '../material-type/material-type-add/material-type-add.component';
import {MaterialAddComponent} from '../material-element/material-add/material-add.component';
import {IncidentAddComponent} from '../accident/incident-add/incident-add.component';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  createMaterialType() {
    this.modalRef = this.modalService.show(MaterialTypeAddComponent, {class: 'modal-md'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeMaterialType(res)
    );
  }
  closeMaterialType(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }

  createMaterial() {
    this.modalRef = this.modalService.show(MaterialAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeMaterial(res)
    );
  }
  closeMaterial(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }
  createIncident() {
    this.modalRef = this.modalService.show(IncidentAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeIncident(res)
    );
  }

  closeIncident(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
    }
  }
}
