export class CreateIncident {
  incidentId = 0;
  employeeId = 0;
  incidentTypeId = 0;
  accidentAgentId = 0;
  lesionTypeId = 1;
  accidentSite = '';
  workingTurn = 'EXTRA_HOURS';
  accidentDate = '';
  accidentDay = '';
  accidentTime = '';
  affectedPart = '';
}

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
