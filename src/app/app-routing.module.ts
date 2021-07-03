import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';

const routes: Routes = [
  {path : '', component: AppointmentsComponent},
  {path : 'edit', component: EditAppointmentComponent},
  {path : 'delete', component: DeleteAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
