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
        this.loadTable()
    }

    toggleFormCollapse() {
        this.displayForm = !this.displayForm;
    }

    loadTable() {
        this.tableLoading = true;
        setTimeout(()=>{
            this.dataService.getAllPlayersFromDB().subscribe(items => {
                const newPlayers = new Array<Player>();
                items.forEach(item => {
                    const player = new Player(item[0], item[1], item[2], item[3]);
                    newPlayers.push(player)
                });
                this.players = newPlayers;
                this.tableLoading = false;
            })
        },1000)
    }

    onSubmit() {
        this.dataService.addPlayerToDB(this.playerForm.value)
            .subscribe(response => console.log(response))
        this.toggleFormCollapse()
        this.loadTable()
    }

    onDelete(id: number) {
        this.dataService.deletePlayerById(id)
        .subscribe(response => console.log(response.text()))
        this.loadTable()
    }


    testClick() {
    }

}
