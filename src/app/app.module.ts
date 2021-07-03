import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//New Work Calendar
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    EditAppointmentComponent,
    DeleteAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModalModule,
    FormsModule,
    FlatpickrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
