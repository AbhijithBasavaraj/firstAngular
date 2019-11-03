import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
@Component({
  selector: "app-search-conf-nbr",
  templateUrl: "./search-conf-nbr.component.html",
  styleUrls: ["./search-conf-nbr.component.css"]
})
export class SearchConfNbrComponent implements OnInit {
  restURL;
  body;
  httpOptions;
  restItems: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.restURL =
      "https://spanner.googleapis.com/v1/projects/iron-potion-771/instances/us-e4-iron-potion-ods-tmp/databases/tmp_bkg_db/sessions/AJSwhATfJ3ps1AqFBxw1yRN1wcVgJTixfi5RgPg51Y7aXiDgnXVEgUGr4EEnKA:executeSql";
    this.body = new HttpParams().set(
      "sql",
      "SELECT * FROM RES_MASTER_SEARCH WHERE CONF_NBR=69160134"
    );

    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          "Bearer ya29.IrABrwd72ceUigD4vbKQYh7WuZagg3EMGFlASYqSM2_fmvEGjYHRlM9i9dKVZYAipNKBkBs8rhbFWzKUOj9Vm0CtSbMzOVxdxXTLkRD4jzxd9bGJTz3rW_aBLs9Q9GVA-5X6pYq4aIXKvVvS6TAcYKwCOJniwpz5WmTzCZs1hVDCkGoYnlhz2LnVZlKDf8ExkEoTciqfSFZiHkyeoClm4luvGyeVXSliXc9OMJZO3ywRMG0"
      })
    };
    this.http
      .post(this.restURL, this.body, this.httpOptions)
      .pipe(map(data => data))
      .subscribe(restItems => {
        this.restItems = restItems;
        console.log(this.restItems);
      });
  }
}
