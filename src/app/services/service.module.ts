import {ModelModule} from '../models/model.module';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {EmployeeService} from './employee.service';
import {IncidentTypeService} from './incident-type.service';
import {AutocompleteService} from './autocomplete.service';
import {IncidentService} from './incident.service';
import {IncidentAgentService} from './incident-agent.service';
import {SharedValuesService} from './shared-values.service';

@NgModule({
  imports: [ModelModule],
  exports: [],
  declarations: []
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [EmployeeService, IncidentTypeService, AutocompleteService, IncidentService, IncidentAgentService, SharedValuesService]
    };
  }
}
