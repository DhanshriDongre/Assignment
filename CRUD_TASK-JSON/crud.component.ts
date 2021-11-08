import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  empno: number  = 0;
  ename  :string  = "";
  job  :string  = "";
  salary: number  = 0;
  isDisabled :boolean = false;
 
  url:string  = "http://localhost:3000/emps";
 
   public empsArray:any[] = [];
 

  constructor(private httpObj: HttpClient) { }

  ngOnInit(): void {
  }


  getEmps_click()
  {
    this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
          this.empsArray = response;
    });

  }


  addEmps_click()
  {
    let empObj:Emp = new Emp();
    empObj.empno = this.empno;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.salary=this.salary;

    this.httpObj.post<any>(this.url,  empObj).subscribe( (response:any) =>{
      console.log("New Emp details are added to server.");
      alert("New Emp details are added to server.");
      this.clearFields();
      this.getEmps_click();  // to get all the updated results
    });
  }

  removeEmps_click(empno:number)
  {
    this.httpObj.delete<any>(this.url + "/" + empno).subscribe( (response:any) =>{
      console.log("Requested Dept details are deleted from  server.");
      alert("Requested Dept details are deleted from  server.");
      this.getEmps_click();  // to get all the updated results
    });
  }


  selectEmps_click(empno:number)
  {
    this.httpObj.get<any>(this.url + "/" + empno).subscribe( (response:any) =>{

      let empObj = response;
      this.empno =   empObj.empno;
      this.ename =   empObj.ename;
      this.job 		=  empObj.job;
      this.salary=empObj.salary;
      this.isDisabled = true;
    });

  }

  updateEmps_click()
  {
    let empObj:Emp = new Emp();
    empObj.empno = this.empno;
    empObj.ename = this.ename;
    empObj.job = this.job;
    empObj.salary=this.salary;

    this.httpObj.put<any>(this.url + "/" +  empObj.empno,  empObj).subscribe( (response:any) =>{
      console.log("Requested Dept details are updated to server.");
      alert("Requested Dept details are updated to server.");
      this.clearFields();
      this.getEmps_click();  // to get all the updated results
    });

  }

  clearFields()
  {
      this.isDisabled = false;
      this.empno = 0;
      this.ename  = "";
      this.job  = "";
      this.salary=0;
  }


}
class Emp
{
  empno  : number = 0;
  ename  : string  = "";
  job  : string  = "";
  salary:number=0;
}