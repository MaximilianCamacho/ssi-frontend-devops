import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Material, MaterialModel} from '../../models/material.model';
import {MaterialService} from '../../services/material.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {SharedValuesService} from '../../services/shared-values.service';
import {MaterialEditComponent} from './../material-edit/material-edit.component';
import {MaterialAddComponent} from '../material-add/material-add.component';
import {Observable} from 'rxjs/Observable';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials: Observable<MaterialModel[]>;
  materialId: [{}];
  isLoading = false;
  // selectedEmployee: Employee;
  modalRef: BsModalRef;
  constructor(private materialService: MaterialService,
              private router: Router,
              private modalService: BsModalService,
              private _sharedValuesService: SharedValuesService) { }

  ngOnInit() {
    this.getMaterial();
    /*this.materialElement.getMaterial().subscribe(data => { this.materials = data; });
    this.materialElement.getMaterialById(3).subscribe(data => { this.materialId = data; });*/
  }
  home() {
    this.router.navigate(['home']);
  }
  updateMaterial(material: MaterialModel) {
    this.router.navigate(['create-edit-mat/' + material.id]);
    console.log(material);
  }
  createMaterial() {
    this.modalRef = this.modalService.show(MaterialAddComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeMaterial(res)
    );
  }
  editMaterial(material: MaterialModel) {
    console.log(' edit ', material);
    this._sharedValuesService.setMaterial$(material);
    this.modalRef = this.modalService.show(MaterialEditComponent, {class: 'modal-lg'});
    this.modalRef.content.isModal = true;
    this.modalRef.content.closeEvent.subscribe(
      res => this.closeMaterial(res)
    );
  }
  deleteMaterial(id: number) {
    if(confirm('Esta seguro que desea Elmininar?')) {
      this.materialService.deleteMaterial(id).subscribe(data => {
        /*alert('the employee was delete');*/
        this.router.navigate(['material-list']);
        this.getMaterial();
      });
    }
  }
  closeMaterial(close: boolean): void {
    if (close && this.modalRef) {
      this.modalRef.hide();
      this.modalRef.content.closeEvent.unsubscribe();
      this.getMaterial();
    }
  }
  getMaterial() {
    this.isLoading = true;
    this.materialService.getMaterial().subscribe(data => {
      console.log('this material subscribe ', data);
      this.materials = data;
      console.log('this material subscribe ', this.materials);
    });
  }
}
