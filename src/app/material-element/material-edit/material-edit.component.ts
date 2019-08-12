import {Component, EventEmitter, OnInit} from '@angular/core';
import {Material, MaterialModel} from '../../models/material.model';
import {MaterialService} from '../../services/material.service';
import {Router} from '@angular/router';
import {SharedValuesService} from '../../services/shared-values.service';
import {MaterialTypeService} from '../../services/material-type.service';
import {MaterialElementService} from '../../security/services/material-element.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.css']
})
export class MaterialEditComponent implements OnInit {

  material: MaterialModel;
  isValid: Boolean = true;
  message: String = '';
  materialType$: [{}];

  public closeEvent = new EventEmitter<boolean>();

  constructor(private materialService: MaterialService,
              private router: Router,
              private materialTypeService: MaterialTypeService,
              private _sharedValuesService: SharedValuesService ) {
    this.material = this._sharedValuesService.materialValue$;
    this.material.materialTypeId = this.material.matType.id;
  }

  ngOnInit() {
    console.log('material', this.material);
    this.materialTypeService.getAllMaterialType().subscribe(data => {
      /*console.log('type material:', data);*/
      this.materialType$ = data; });
  }

  public updateMaterial(): void {
    this.isValid = this.materialService.validate(this.material);
    if (this.isValid) {
      console.log('update material', this.material);
      this.materialService.updateMaterial(this.material).subscribe(res => {
        this.router.navigate(['material-list']);
        this.closeMaterial();
      });
    } else {
      this.message = 'los camos son obligatorios';
    }
  }

  closeMaterial() {
    this.closeEvent.next(true);
  }

}
