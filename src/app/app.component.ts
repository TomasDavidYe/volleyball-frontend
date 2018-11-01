import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Router, ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    model = {
        first_name: '',
        last_name: '',
        occupation: '',
    }
    constructor(private router: Router, private route: ActivatedRoute, private http: Http){}

    submit(){
        console.log(this.model)
        this.http.post('http://localhost:5000/post-something',this.model).subscribe(response => {
            console.log(response)
        })
    }
}
