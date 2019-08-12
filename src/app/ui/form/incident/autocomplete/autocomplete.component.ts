import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import {AutocompleteService} from '../../../../services/autocomplete.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  searchTerm: FormControl = new FormControl();
  autocomplete$: Observable<any>;
  searchResult = [];
  constructor(
    private autocompleteService: AutocompleteService
  ) {
    this.searchTerm.valueChanges
      .subscribe(data => {
       this.autocompleteService.getEmployees(data).subscribe(response => {
         console.log(response);
         this.searchResult = response;
       });
      });
  }
  ngOnInit(): void {
  }
  getEmployees() {

  }
}
