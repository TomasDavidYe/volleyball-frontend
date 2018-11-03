import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { Player } from '../data-classes';
import { DataService } from '../services/data-service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playerForm: FormGroup;
  displayForm: boolean;
  tableLoading: boolean;
  players: Player[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.displayForm = false;
    this.playerForm = new FormGroup({
        nickname: new FormControl(''),
        sex: new FormControl(''),
        address: new FormControl('')
    })
    this.players = new Array<Player>();
    this.tableLoading = true;
    this.loadTable()
  }

  toggleFormCollapse(){
    this.displayForm = !this.displayForm;
  }

  loadTable(){
    console.log("loading table")
    this.dataService.getAllPlayersFromDB().subscribe(items => {
        items.forEach(item => {
            const player = new Player(item[1], item[2], item[3]);
            this.players.push(player)
        });
        console.log(this.players)
        this.players = this.players.slice(0)
        this.tableLoading = false;
    })
  }

  onSubmit(){
      this.dataService.addPlayerToDB(this.playerForm.value)      
  }
  testClick(){
      console.log(this.players)
  }

}
