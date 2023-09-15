import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Appointment } from "./Appointment";
import { environment } from "src/environments/environment";
import { Appointments } from "./api";
import { ReturnStatement } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class AppointmentService {
  private BASE_URL = environment.API_URL;
  appointments: Appointment[] = [];

  constructor(private http: HttpClient) {}

  getAppointments(): Appointment[] {
    this.appointments = Appointments;
    return this.appointments;
  }

  createAppointment(
    appointmentDate: string,
    firstName: string,
    lastName: string,
    email: string
  ): Appointment {
    let appt: Appointment = {
      _id: "random",
      appointmentDate: appointmentDate,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    this.appointments.push(appt);
    return appt;
  }

  cancelAppointment(id: string) {}
}
