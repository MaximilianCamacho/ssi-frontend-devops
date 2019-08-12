import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MaterialTypeService} from '../../services/material-type.service';
import {MaterialType} from '../../models/material-type.model';
import {UserValidator} from '../../validations/validation-forms';

@Component({
  selector: 'app-material-type-add',
  templateUrl: './material-type-add.component.html',
  styleUrls: ['./material-type-add.component.css']
})
export class MaterialTypeAddComponent implements OnInit {

  materialType: MaterialType;
  // addForm: FormGroup;
  private isValid: Boolean = true;
  private message: String = '';
  public closeEvent = new EventEmitter<boolean>();
  private validator: UserValidator;
  constructor(private router: Router,
              private fb: FormBuilder,
              private materialTypeService: MaterialTypeService) {
      this.materialType = new MaterialType();
  }

  ngOnInit(): void {
    // this.addForm = this.fb.group({
      // id: [],
     //  nameType: ['', Validators.required]
    // });
  }

  onSubmit() {
    this.materialTypeService.createMaterialType(this.materialType).subscribe(
      data => {
        console.log('create', data);
        /*this.router.navigate(['material-type-list']);*/
        this.closeMaterialType();
        window.location.replace('http://localhost:4200/#/material-type-list');
      }
    );
  }
  closeMaterialType() {
    this.closeEvent.next(true);
  }

  public saveMaterialType(): void {
    this.isValid = this.materialTypeService.validate(this.materialType);
    if (this.isValid) {
      this.materialTypeService.createMaterialType(this.materialType).subscribe(res => {
        this.router.navigate(['material-Type-list']);
        this.closeMaterialType();
      });
    } else {
      this.message = 'los campos son obligatorios';
    }
  }

}
