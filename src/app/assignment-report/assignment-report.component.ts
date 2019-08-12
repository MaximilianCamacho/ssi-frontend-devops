import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import { AssignmentReportService } from '../security/services/assignment-report.service';


@Component({
  selector: 'app-assignment-report',
  templateUrl: './assignment-report.component.html',
  styleUrls: ['./assignment-report.component.css']
})
export class AssignmentReportComponent implements OnInit {

  assignments: [{}];

  constructor(private  assignmentEquipment: AssignmentReportService,
              private router: Router) {
  }

  ngOnInit() {
    this.assignmentEquipment.getAssignment().subscribe(data => {
      this.assignments = data;
    });
  }
  newAssignment() {
    this.router.navigate(['assignment']);
  }
  home(){
    this.router.navigate(['home']);
  }
}
