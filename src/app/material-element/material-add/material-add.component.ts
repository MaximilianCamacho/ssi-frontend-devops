import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MaterialService} from '../../services/material.service';
import {Material, MaterialModel} from '../../models/material.model';
import {MaterialType} from '../../models/material-type.model';
import {MaterialTypeService} from '../../services/material-type.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent implements OnInit {

  material: MaterialModel;
  materialType$: MaterialType;
  modalRef: BsModalRef;
  private isValid: Boolean = true;
  private message: String = '';
  public closeEvent = new EventEmitter<boolean>();

  constructor(private materialService: MaterialService,
              private router: Router,
              private materialTypeService: MaterialTypeService) {
    this.material = new MaterialModel();
  }

  ngOnInit(): void {
    this.materialTypeService.getAllMaterialType().subscribe( data => {
      /*console.log('List material type aaaaa: ', data);*/
      this.materialType$ = data; });
  }
  onSubmit() {
    this.materialService.createMaterial(this.material).subscribe(
      data => {
        console.log('create', data);
        this.router.navigate(['material-list']);
        this.closeMaterial();
        window.location.reload();
      }
    );
  }
  /*public saveMaterial(): void {
    console.log('new material:', this.material);
    this.isValid = this.materialService.validate(this.material);
    if (this.isValid) {
      console.log('entro al if:', this.material);
      this.materialService.createMaterial(this.material).subscribe(
        res => {
        console.log('aaaa', res);
        console.log('bbbbb', this.material);
        this.router.navigate(['material-list']);
        this.closeMaterial();
        },
        error => {
          console.log('error', error);
        }
      );
    } else {
      this.message = 'los camos son obligatorios';
    }
  }*/
  public saveMaterial(): void {
    this.isValid = this.materialService.validate(this.material);
    if (this.isValid) {
      console.log('Entro al If', this.material);
      this.materialService.createMaterial(this.material).subscribe(res => {
        console.log('Despues de create material', res);
        this.router.navigate(['material-list']);
        this.closeMaterial();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }
  closeMaterial() {
    this.closeEvent.next(true);
    /*this.modalRef.hide();*/
  }
}
