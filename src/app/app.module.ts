import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SearchfilterPipe } from './Employee_class/searchfilter.pipe';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    SearchfilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
