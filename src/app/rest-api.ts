  import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { result } from './result';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  // Define API
  apiURL = 'https://spanner.googleapis.com/v1/projects/iron-potion-771/instances/us-e4-iron-potion-ods-tmp/databases/tmp_bkg_db/sessions/AJSwhAQOx-JRxH2JYX4sk2KCbUKXsjR8buW8czAb_CsrO4pfBNHga1FhOZvxiA:executeSql';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  body = '{"sql":"SELECT * FROM RES_MASTER_SEARCH WHERE CONF_NBR=69160134"}';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ya29.IrABrwcub2zA1XI512yjKqTrZ2N3pKMDzwtJskOjKuxtN1b92tdmSdEZkuezKXzQWGgFq7Cj2xxIXtJKoQL5txgnW0K9vCdw8dcc7kfiGj34ETwqqUudBqwO-sjBu1Ivv5EWwYR2s468FO6mdspAFOKoYAznA1xPpWsMHCtxMdAKo5SKNyja-LjPxb01lcWdN_OnHJZq4hSvzpUEGUzyPnKCywPGnGTRAT7Y-PvuaMWIpOI'

    })
  }; 
   req = this.http.post(this.apiURL,JSON.stringify(this.body),this.httpOptions);

   
  

}

    