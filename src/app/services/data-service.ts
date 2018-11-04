import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { Player } from "../data-classes";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class DataService{
    constructor(private http: Http){}

    addPlayerToDB(user): Observable<any>{
        return this.http.post('http://localhost:5000/store-player', user)
      .pipe(map(response => response.text()))
    }

    getAllPlayersFromDB(): Observable<any>{
        return this.http.get('http://localhost:5000/get-players')
        .pipe(map(response => JSON.parse(response.text())))        
    }

    deletePlayerById(id: number): Observable<any>{
        let url = 'http://localhost:5000/delete-player/' + id;
        return this.http.delete(url)
    }
    
}