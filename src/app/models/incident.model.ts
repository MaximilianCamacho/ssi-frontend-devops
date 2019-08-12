import {IncidentType} from './incident-type.model';
import {Employee} from './employee.model';
import {LesionType} from './lesion-type.model';
import {IncidentAgent} from './incident-agent.model';

export class Incident {
  id = 0;
  accidentSite = '';
  accidentDate = '';
  accidentDay = '';
  accidentTime = '';
  affectedPart = '';
  workingTurn = '';
  incidentType = IncidentType;
  employee = Employee;
  lesionType = LesionType;
  accidentAgent = IncidentAgent;
}


