import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-tabset-contract',
  templateUrl: './tabset-contract.html'
})
export class NgbdTabsetContract {
    pdfSrc: string = "./app/imgs/PuppyContract.pdf";
    page: number = 1;
    firstPage: boolean = true;

    downloadPdf(){}
    previousPage(){
        this.page=1;
        this.firstPage=true;
    }
    nextPage(){
        this.page=2;
        this.firstPage=false;
    }
} 