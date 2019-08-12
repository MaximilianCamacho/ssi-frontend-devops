import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../models/employee.model';
import {Area} from '../models/area.model';
import {AreaService} from '../services/area.service';
// import {Routes, RouterModule, Router} from '@angular/router';
import {Router} from '@angular/router';
import {AreaListComponent} from '../area-list/area-list.component';



@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.css'],
  providers: [AreaService]
})
export class AreaCreateComponent implements OnInit {
  areas: Array<Area>;
  areasItem: Area;
  constructor( private  areaService: AreaService ,
               private  router: Router) {
  }

  ngOnInit() {
    this.loadAreas();
  }
  private loadAreas(): void {
    this.areaService.getAreas().subscribe(res => {
      this.areas = res;
      console.log(res);
    });
  }

  public  editar(areas: Area): void {
    sessionStorage.setItem('areas', JSON.stringify(areas));
    console.log(sessionStorage.setItem('areas', JSON.stringify(areas)));
    this.router.navigate(['area-list']);

    }

  public  delete(areas: Area): void {
    this.areaService.deleteArea(areas);
    }
   }
