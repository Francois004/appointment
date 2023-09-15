import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  public ccNumMissingTxt = "Please provide card number";
  public cardExpiredTxt = "Payment card has expired";
  public successMsg: string;
  public errorMsg: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.successMsg = "";
    this.errorMsg = "";
  }

  processPayment(cc) {
    // console.log(cc);
    this.router.navigate(["appointment-list"]);
    this.successMsg = `Rendez vous pris avec succès `;
  }
}
