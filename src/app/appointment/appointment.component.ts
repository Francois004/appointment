import { Component, OnInit } from "@angular/core";
import { AppointmentService } from "../appointment.service";
import { Appointment } from "../Appointment";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.css"],
})
export class AppointmentComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  appointmentDate: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {}

  createAppointment() {
    this.successMsg = "";
    this.errorMsg = "";
    this.appointmentService.createAppointment(
      this.appointmentDate,
      this.firstName,
      this.lastName,
      this.email
    );
    this.appointmentDate = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    //const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
    this.successMsg = `Appointment Booked Successfully `;
  }
}
