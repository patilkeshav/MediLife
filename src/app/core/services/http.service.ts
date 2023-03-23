import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

baseUrl:string=environment.baseUrl
httpheaders:HttpHeaders=new HttpHeaders()
                      .set("Content-type","application/json");

  constructor(private http:HttpClient) { }
  getDataFromServer(endpoint:string){
    const Url=this.baseUrl+endpoint
    return this.http.get(Url,{headers:this.httpheaders})
  }
  getDataFromServerByQueryParam(endpoint:string,httpParams:HttpParams ){
    const Url=this.baseUrl+endpoint
    return this.http.get(Url,{headers:this.httpheaders,params:httpParams})
  }

  postDataToServer(endpoint:string,data:any){
      const Url=this.baseUrl+endpoint
      return this.http.post(Url,data,{headers:this.httpheaders})
  }
}
