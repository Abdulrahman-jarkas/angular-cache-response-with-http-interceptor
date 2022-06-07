import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Output() onUserPaginate = new EventEmitter<number>();

  setPage(e: any) {
    this.onUserPaginate.emit(e.pageIndex);
  }
}
