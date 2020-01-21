import { Component, OnInit } from '@angular/core';
import { CrmService } from 'app/service/crm.service';
import { GlobalService } from 'app/global/global';
@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
    key: string;
    result: string;
    constructor(private service: CrmService, private global: GlobalService) { }

    ngOnInit() {
    }
    searchElastic() {
        this.global.showLoading();
        this.service.searchLog(this.key).subscribe(res => {
            this.global.hideLoading();
            if (res != null) {
                this.result = JSON.stringify(res);
            } else {
                this.global.openSnackBar('Log bulunamadı !', 'Tamam');
            }
        }
        );
    }
}
