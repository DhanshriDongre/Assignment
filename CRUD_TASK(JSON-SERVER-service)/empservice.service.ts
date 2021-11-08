import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
} )
export class EmpService {

  empsArray:any[] =  [];
  url:string  = "http://localhost:3000/emps";

  constructor(private httpObj: HttpClient) {

  }

  getData():Observable<any[]>
  {
      return this.httpObj.get<any[]>(this.url);
  }

  getDataById(empno:number) : Observable<any>
  {
   // return this.httpObj.get<any>(this.url + "/" + dno);
    return this.httpObj.get<any>(`${this.url}/${empno}`);
  }

  addData(empObj:any) : Observable<any>
  {
    return this.httpObj.post<any>(this.url, empObj);
  }

  updateData(empObj:any) : Observable<any>
  {
    return this.httpObj.put<any>(this.url + "/" + empObj.empno, empObj);
  }

  deleteData(empno:number) : Observable<any>
  {
    return this.httpObj.delete<any>(`${this.url}/${empno}`);
  }
}