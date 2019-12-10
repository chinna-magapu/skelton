import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  closeResult: string;

  constructor( private modalService: NgbModal ) { }


  public openDialog(data) {
    const modalRef = this.modalService.open(ErrorDialogComponent);
    modalRef.componentInstance.data = data;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
