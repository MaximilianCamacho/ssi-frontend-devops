import {MaterialType} from '../../models/material-type.model';
import {MaterialTypeService} from '../../services/material-type.service';
import {SharedValuesService} from '../../services/shared-values.service';
import {BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-material-type-edit',
  templateUrl: './material-type-edit.component.html',
  styleUrls: ['./material-type-edit.component.css']
})
export class MaterialTypeEditComponent implements OnInit {
  materialType: MaterialType;
  private isValid: Boolean = true;
  private  message: String = '';

  public closeEvent = new EventEmitter<boolean>();
  constructor(private materialTypeService: MaterialTypeService,
              private  router: Router,
              private modalService: BsModalService,
              private sharedValuesService: SharedValuesService) {
    this.materialType = this.sharedValuesService.materialTypeValue$;
  }

  ngOnInit() {
  }

  public updateMaterialType(): void {
    this.isValid = this.materialTypeService.validate(this.materialType);
    if (this.isValid) {
      console.log('update material Type', this.materialType);
      this.materialTypeService.updateMaterialType(this.materialType).subscribe(res => {
        this.router.navigate(['material-type-list']);
        this.closeMaterialType();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }
  closeMaterialType() {
    this.closeEvent.next(true);
  }

}
