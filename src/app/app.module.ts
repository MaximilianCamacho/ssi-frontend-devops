import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTabsModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSortModule,
  MatDatepickerModule,
  MatMenuModule,
  MatRippleModule,
  MatTableModule
} from '@angular/material';
import {UserService} from './security/services/user.service';
import {AuthGuard} from './security/guards/auth-guard.service';
import {AdminAuthGuard} from './security/guards/admin-auth-guard.service';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AssignmentComponent} from './assignment/assignment.component';
import {AppBootstrapModule} from './app-bootstrap.module';
import {AboutComponent} from './about/about.component';
import {AssignmentReportComponent} from './assignment-report/assignment-report.component';
import {MaterialElementComponent} from './material-element/material-element.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeDetailComponent} from './employee/employee-detail/employee-detail.component';
import {ModelModule} from './models/model.module';
import {IncidentListComponent} from './accident/incident-list/incident-list.component';
import {IncidentAddComponent} from './accident/incident-add/incident-add.component';
import { OEstructureComponent } from './oestructure/oestructure.component';
import {AppRoutingModule} from './app-routing.module';
import { AssignmentService } from './security/services/assignment.service';
import { AssignmentReportService } from './security/services/assignment-report.service';
import {ServiceModule} from './services/service.module';
import {IncidentTypeListComponent} from './ui/form/Incident-type/incident-type-list/incident-type-list.component';
import {IncidentTypeDetailComponent} from './ui/form/Incident-type/incident-type-detail/incident-type-detail.component';
import {MaterialElementService} from './security/services/material-element.service';
import {EmployeeAddComponent} from './employee/employee-add/employee-add.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {MaterialDeleteComponent} from './material-element/material-delete/material-delete.component';
import {MaterialUpdateComponent} from './material-element/material-update/material-update.component';
import {MaterialCreateComponent} from './material-element/material-create/material-create.component';
import {AutocompleteComponent} from './ui/form/incident/autocomplete/autocomplete.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap';
import {MaterialTypeAddComponent} from './material-type/material-type-add/material-type-add.component';
import {MaterialTypeService} from './services/material-type.service';
import {MaterialTypeListComponent} from './material-type/material-type-list/material-type-list.component';
import {EmployeeTypeListComponent} from './employee/employee-type-list/employee-type-list.component';
import {EmployeeTypeService} from './services/employee-type.service';
import { AreaCreateComponent } from './area-create/area-create.component';
import { AreaListComponent } from './area-list/area-list.component';
import { CapacityCreateComponent } from './capacity-create/capacity-create.component';
import {MaterialTypeEditComponent} from './material-type/material-type-edit/material-type-edit.component';
import { CreatePersonalInformationComponent } from './create-personal-information/create-personal-information.component';
import { PersonalListComponent } from './personal-list/personal-list.component';
import {MaterialAddComponent} from './material-element/material-add/material-add.component';
import {MaterialListComponent} from './material-element/material-list/material-list.component';
import {MaterialService} from './services/material.service';
import {MaterialEditComponent} from './material-element/material-edit/material-edit.component';
import {IncidentService} from './services/incident.service';
import {EmployeeTypeAddComponent} from './employee/employee-type-add/employee-type-add.component';
import {EmployeeTypeEditComponent} from './employee/employee-type-edit/employee-type-edit.component';
import {IncidentTypeEditComponent} from './accident/incident-type-edit/incident-type-edit.component';
import {IncidentTypeAddComponent} from './accident/incident-type-add/incident-type-add.component';
import {IncidentTypeListsComponent} from './accident/incident-type-lists/incident-type-lists.component';
import {IncidentAgentListComponent} from './accident/incident-agent-list/incident-agent-list.component';
import {IncidentAgentAddComponent} from './accident/incident-agent-add/incident-agent-add.component';
import {IncidentAgentEditComponent} from './accident/incident-agent-edit/incident-agent-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AssignmentComponent,
    AboutComponent,
    AssignmentReportComponent,
    MaterialElementComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent,
    EmployeeTypeListComponent,
    EmployeeTypeAddComponent,
    EmployeeTypeEditComponent,
    IncidentTypeListComponent,
    IncidentTypeDetailComponent,
    MaterialTypeAddComponent,
    MaterialTypeListComponent,
    MaterialTypeEditComponent,
    ReportComponent,
    HomeComponent,
    OEstructureComponent,
    MaterialAddComponent,
    MaterialListComponent,
    MaterialEditComponent,
    MaterialCreateComponent,
    MaterialUpdateComponent,
    MaterialDeleteComponent,
    AutocompleteComponent,
    MaterialDeleteComponent,
    AutocompleteComponent,
    MaterialDeleteComponent,
    AreaCreateComponent,
    AreaListComponent,
    CapacityCreateComponent,
    CreatePersonalInformationComponent,
    PersonalListComponent,
    IncidentAddComponent,
    IncidentListComponent,
    IncidentTypeAddComponent,
    IncidentTypeEditComponent,
    IncidentTypeListsComponent,
    IncidentAgentListComponent,
    IncidentAgentAddComponent,
    IncidentAgentEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    ModelModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceModule.forRoot(),
   // SecurityModule,
    AppRoutingModule,
    MatStepperModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, BrowserAnimationsModule, FlexLayoutModule, AppBootstrapModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AdminAuthGuard,
    AssignmentService,
    AssignmentReportService,
    BsModalService,
    MaterialTypeService,
    EmployeeTypeService,
    AssignmentReportService,
    MaterialService,
    MaterialTypeService,
    IncidentService,
    MaterialElementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
