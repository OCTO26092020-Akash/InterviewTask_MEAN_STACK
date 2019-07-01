import { Component, OnInit } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';
import { FormControl , FormGroup} from '@angular/forms';

import { EmployeeService } from '../Employee_class/employee.service';
import { Employee } from '../Employee_class/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {

  list1 = [];
  // list2 = [];
  // list3 = [];
  // list4 = [];
  // list5 = [];

  term1 = '';
  // term2 = '';
  // term3 = ''; 
  // term4 = '';
  // term5 = '';
  
  emp : Employee[];

  Name : string;
  Designation : string;
  PhoneNumber : string;
  City : string;
  CompanyName : string;


  onSubmit(form1 : NgForm)
  {
    const newemp = 
    {
      Name : this.Name,
      Designation : this.Designation,
      PhoneNumber : this.PhoneNumber,
      City : this.City,
      CompanyName : this.CompanyName
    }


    this.employeeService.addEmployee(form1.value).subscribe((res) => {

        this.emp.push(this.form1.value);
        console.log(this.form1);
    });


  }
  
 

  AddEmployee() {
 
    if(this.term1! = '')
    {
      this.list1.push(this.term1);
      this.term1='';
    }
    // if(this.term2! = '')
    // {
    //   this.list2.push(this.term1);
    //   this.term2='';
    // }
    // if(this.term3! = '')
    // {
    //   this.list3.push(this.term1);
    //   this.term3='';
    // }
    // if(this.term4! = '')
    // {
    //   this.list4.push(this.term1);
    //   this.term4='';
    // }
    // if(this.term5! = '')
    // {
    //   this.list5.push(this.term1);
    //   this.term5='';
    // }
 


  }

  employees:any=[
    { Name:"Akash", Designation:"Junior Software Developer", PhoneNumber:"1234567890", City:"Kolhapur", CompanyName:"Abc" },
    { Name:"Prakash", Designation:"Senior Software Developer", PhoneNumber:"7894561230", City:"Pune", CompanyName:"Def" },
    { Name:"Bharat", Designation:"Junior Software Consultant", PhoneNumber:"9638527410", City:"Bangalore", CompanyName:"Ghi" },
    { Name:"Ramesh", Designation:"Senior Software Developer", PhoneNumber:"5789461230", City:"Mumbai", CompanyName:"Klm" },
    { Name:"Avi", Designation:"HR", PhoneNumber:"9512357864", City:"Delhi", CompanyName:"Nop" },
    
];



  form1: FormGroup;

 


  constructor(private employeeService : EmployeeService) {

    
    // console.log(this.employees);
   }

  
  

  ngOnInit() {

    this.employeeService.getEmployee().subscribe( Employee => this.emp = Employee);

    this.form1 = new FormGroup({
      Name :  new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      Designation :  new FormControl(''),
      PhoneNumber :  new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10) , Validators.maxLength(10)]),
      City :  new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      CompanyName :  new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
    })

   


    
  }

}
