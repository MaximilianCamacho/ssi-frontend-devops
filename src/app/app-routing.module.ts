import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AssignmentComponent} from './assignment/assignment.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';
import {HomeComponent} from './home/home.component';
import {ReportComponent} from './report/report.component';
import {AboutComponent} from './about/about.component';
import {IncidentListComponent} from './accident/incident-list/incident-list.component';
import {IncidentAddComponent} from './accident/incident-add/incident-add.component';
import {OEstructureComponent} from './oestructure/oestructure.component';
import {IncidentTypeListComponent} from './ui/form/Incident-type/incident-type-list/incident-type-list.component';
import {MaterialCreateComponent} from './material-element/material-create/material-create.component';
import {MaterialUpdateComponent} from './material-element/material-update/material-update.component';
import {MaterialDeleteComponent} from './material-element/material-delete/material-delete.component';
import {MaterialTypeAddComponent} from './material-type/material-type-add/material-type-add.component';
import {MaterialTypeListComponent} from './material-type/material-type-list/material-type-list.component';
import {EmployeeTypeListComponent} from './employee/employee-type-list/employee-type-list.component';
import {AreaCreateComponent} from './area-create/area-create.component';
import {CapacityCreateComponent} from './capacity-create/capacity-create.component';
import {AreaListComponent} from './area-list/area-list.component';
import {MaterialTypeEditComponent} from './material-type/material-type-edit/material-type-edit.component';
import {CreatePersonalInformationComponent} from './create-personal-information/create-personal-information.component';
import {PersonalListComponent} from './personal-list/personal-list.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeAddComponent} from './employee/employee-add/employee-add.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {EmployeeDetailComponent} from './employee/employee-detail/employee-detail.component';
import {MaterialAddComponent} from './material-element/material-add/material-add.component';
import {MaterialListComponent} from './material-element/material-list/material-list.component';
import {MaterialEditComponent} from './material-element/material-edit/material-edit.component';
import {EmployeeTypeAddComponent} from './employee/employee-type-add/employee-type-add.component';
import {EmployeeTypeEditComponent} from './employee/employee-type-edit/employee-type-edit.component';
import {IncidentTypeListsComponent} from './accident/incident-type-lists/incident-type-lists.component';
import {IncidentTypeEditComponent} from './accident/incident-type-edit/incident-type-edit.component';
import {IncidentTypeAddComponent} from './accident/incident-type-add/incident-type-add.component';
import {IncidentAgentListComponent} from './accident/incident-agent-list/incident-agent-list.component';
import {IncidentAgentAddComponent} from './accident/incident-agent-add/incident-agent-add.component';
import {IncidentAgentEditComponent} from './accident/incident-agent-edit/incident-agent-edit.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'materialEquipment',
    component: MaterialElementComponent
  },
  {
    path: 'assignment-report',
    component: AssignmentReportComponent
  },
  {
    path: 'incident-list',
    component: IncidentListComponent
  },
  {
    path: 'incident-add',
    component: IncidentAddComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'incident-type-add',
    component: IncidentTypeAddComponent
  },
  {
    path: 'incident-type-edit',
    component: IncidentTypeEditComponent
  },
  {
    path: 'incident-type-lists',
    component: IncidentTypeListsComponent
  },
  {
    path: 'incident-agent-add',
    component: IncidentAgentAddComponent
  },
  {
    path: 'incident-agent-edit',
    component: IncidentAgentEditComponent
  },
  {
    path: 'incident-agent-list',
    component: IncidentAgentListComponent
  },
  {
    path: 'employee-add',
    component: EmployeeAddComponent
  },
  {
    path: 'employee-edit',
    component: EmployeeEditComponent
  },
  {
    path: 'employee-detail',
    component: EmployeeDetailComponent
  },
  {
    path: 'employee-type-list',
    component: EmployeeTypeListComponent
  },
  {
    path: 'employee-type-add',
    component: EmployeeTypeAddComponent
  },
  {
    path: 'employee-type-edit',
    component: EmployeeTypeEditComponent
  },
  {
    path: 'incident-type-list',
    component: IncidentTypeListComponent
  },
  {
    path: 'assignment',
    component: AssignmentComponent
  },
  {
    path: 'material-type-add',
    component: MaterialTypeAddComponent
  },
  {
    path: 'material-type-edit',
    component: MaterialTypeEditComponent
  },
  {
    path: 'material-type-list',
    component: MaterialTypeListComponent
  },
  {
    path: 'material',
    component: MaterialElementComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  // {
  //   path: 'accident',
  //   component: AccidentComponent
  // },
  {
    path: 'oestructure',
    component: OEstructureComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'material-add',
    component: MaterialAddComponent
  },
  {
    path: 'material-edit',
    component: MaterialEditComponent
  },
  {
    path: 'material-list',
    component: MaterialListComponent
  },
  {
    path: 'create-mat',
    component: MaterialCreateComponent
  },
  {
    path: 'edit-mat',
    component: MaterialUpdateComponent
  },
  {
    path: 'create-edit-mat/:id',
    component: MaterialCreateComponent
  },
  {
    path: 'area-create',
    component: AreaCreateComponent
  },
  {
    path: 'area-list',
    component: AreaListComponent
  },
  {
    path: 'create-personal-information',
    component: CreatePersonalInformationComponent
  },
  {
    path: 'personal-list',
    component: PersonalListComponent
  },
  {
    path: 'capacity-create',
    component: CapacityCreateComponent
  },

  {
    path: 'delete-mat',
    component: MaterialDeleteComponent
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false, useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
