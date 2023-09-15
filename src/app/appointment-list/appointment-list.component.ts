import { Component, OnInit } from "@angular/core";
import { AppointmentService } from "../appointment.service";
import { Appointment } from "../Appointment";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"],
})
export class AppointmentListComponent implements OnInit {
  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public appointments: Appointment[];
  public columns = [
    "appointmentDate",
    "firstName",
    "lastName",
    "email",
    "cancel",
  ];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.appointments = this.appointmentService.getAppointments();
    this.loading = false;
  }

  cancelAppointment(id: string) {
    this.appointmentService.cancelAppointment(id);
  }
}
