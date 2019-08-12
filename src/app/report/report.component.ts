import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[ClientService]
})
export class ReportComponent implements OnInit {
private users: Array<Employee>;
constructor(private clientService: ClientService) { }

  ngOnInit() {
  this.loadUsers();
  }
private loadUsers(): void {
  this.clientService.getEmployee().subscribe(res =>{
    this.users = res;
    console.log(res);
  });
}

}
