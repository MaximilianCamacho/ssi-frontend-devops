import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentAddComponent } from './incident/incident-add/incident-add.component';
import { IncidentEditComponent } from './incident/incident-edit/incident-edit.component';
import { IncidentListComponent } from './incident/incident-list/incident-list.component';
import {ServiceModule} from '../services/service.module';
import {IncidentRoutingModule} from './incident-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentTypeAddComponent } from './incident-type/incident-type-add/incident-type-add.component';
import {IncidentAgentAddComponent} from './incident-agent/incident-agent-add/incident-agent-add.component';
@NgModule({
  imports: [
    CommonModule,
    ServiceModule.forRoot(),
    IncidentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IncidentAddComponent, IncidentEditComponent, IncidentListComponent, IncidentTypeAddComponent, IncidentAgentAddComponent]
})
export class IncidentModule { }
