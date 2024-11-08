import { Component, OnInit } from '@angular/core';
import { PaymentDetailsFormComponent } from "./payment-details-form/payment-details-form.component";
import { PaymentDetailService } from '../../Services/payment-detail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailsFormComponent, CommonModule],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService) {}

  ngOnInit() {
    this.service.refreshList();
  }

}
