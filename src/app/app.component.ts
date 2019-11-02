import { Component,OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements  OnInit {}
  /*title = 'app';
  restItems: any;
  restItemsUrl = 'https://spanner.googleapis.com/v1/projects/iron-potion-771/instances/us-e4-iron-potion-ods-tmp/databases/tmp_bkg_db/sessions/AJSwhAQOx-JRxH2JYX4sk2KCbUKXsjR8buW8czAb_CsrO4pfBNHga1FhOZvxiA:executeSql';

   body = '{"sql":"SELECT * FROM RES_MASTER_SEARCH WHERE CONF_NBR=69160134"}';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ya29.IrABrwcub2zA1XI512yjKqTrZ2N3pKMDzwtJskOjKuxtN1b92tdmSdEZkuezKXzQWGgFq7Cj2xxIXtJKoQL5txgnW0K9vCdw8dcc7kfiGj34ETwqqUudBqwO-sjBu1Ivv5EWwYR2s468FO6mdspAFOKoYAznA1xPpWsMHCtxMdAKo5SKNyja-LjPxb01lcWdN_OnHJZq4hSvzpUEGUzyPnKCywPGnGTRAT7Y-PvuaMWIpOI'

    })
  }; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .post(this.restItemsUrl,JSON.stringify(this.body),this.httpOptions)
      .pipe(map(data => data));
  }
}

*/
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/