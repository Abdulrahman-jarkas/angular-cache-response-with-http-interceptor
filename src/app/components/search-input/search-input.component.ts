import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  searchCtrl = new FormControl('');

  sub = new Subscription();

  @Output() onUserSearch = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.sub.add(
      this.searchCtrl.valueChanges
        .pipe(debounceTime(1000), distinctUntilChanged())
        .subscribe(() => this.onUserSearch.emit(+this.searchCtrl.value))
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
