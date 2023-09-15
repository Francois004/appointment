import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AppointmentComponent } from "./appointment/appointment.component";
import { AppointmentListComponent } from "./appointment-list/appointment-list.component";
import { PaymentComponent } from "./payment/payment.component";
import { AppointmentChartComponent } from "./appointment-chart/appointment-chart.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "appointment",
    component: AppointmentComponent,
  },
  {
    path: "appointment-list",
    component: AppointmentListComponent,
  },
  {
    path: "appointment-chart",
    component: AppointmentChartComponent,
  },
  {
    path: "payment",
    component: PaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
