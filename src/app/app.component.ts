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
        let a: Response
        console.log('sending request')
        this.http.post('http://localhost:5000/post-something',this.model).pipe(map(response => response.text())).subscribe(response => {
            console.log(response)
        })
    }

    navigateTo(path: string){
        const url: string = '/' + path;
        this.router.navigate([url]);
    }

}
