import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playerForm: FormGroup;
  displayForm: boolean;
  constructor(private fb: FormBuilder, private http: Http) { }

  ngOnInit() {
    this.displayForm = false;
    this.playerForm = new FormGroup({
        nickname: new FormControl(''),
        sex: new FormControl(''),
        address: new FormControl('')
    })
  }

  toggleFormCollapse(){
    this.displayForm = !this.displayForm;
  }

  onSubmit(){
      this.http.post('http://localhost:5000/store-user', this.playerForm.value)
      .pipe(map(response => response.text()))
      .subscribe(text => location.reload());
      
  }

}
