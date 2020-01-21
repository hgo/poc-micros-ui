import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global/global';
import { CrmService } from 'app/service/crm.service';
import { Customer } from 'app/model/customer';

@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.scss']
})
export class CcComponent implements OnInit {
  customer: Customer;
  tckn: number;
  constructor(private global: GlobalService, private service: CrmService) { }

  ngOnInit() {
  }
  searchCustomer() {
    this.global.showLoading();
    const tckn = this.tckn;
    this.service.findCustomer(tckn).subscribe(res => {
      this.global.hideLoading();
      if (res != null) {
        this.customer = res[0];
        console.log(res);
      } else {
        this.global.openSnackBar('Müşteri bulunamadı !', 'Tamam');
      }
    }
    );
  }
  save() {
    this.service.saveCustomer(this.customer).subscribe(result => {
      if (result != null) {
        this.global.openSnackBar('Kayıt yapılmıştır.', 'Tamam');
      }
    })
  }

}
