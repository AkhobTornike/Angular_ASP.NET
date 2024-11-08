import { Component } from '@angular/core';
import { PaymentDetailService } from '../../../Services/payment-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../../Model/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-details-form.component.html',
  styles: ``
})
export class PaymentDetailsFormComponent {

  constructor(
    public service: PaymentDetailService,
    public toastr: ToastrService,
  ) {}

  onSubmit(form: NgForm) {
    this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form)
          this.toastr.success('Inserted Succesfully', 'Payment Detail Register')
      },
      error: err => { console.log(err) }
    }
    )
  }
}
