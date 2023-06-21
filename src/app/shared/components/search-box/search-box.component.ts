import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, Subject, Subscription} from "rxjs";

@Component({
  selector: 'shared-search-box',
  template: `
    <!--    (keyup.enter)="emitValue(txtInput.value)"-->
    <input
      class="form-control"
      type="text"
      #txtInput
      [placeholder]="placeholder"
      (keyup)="onKeyPress(txtInput.value)"
      [value]="initialValue"
    />
    <hr>
  `,
  styles: []
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncedSubscription?: Subscription;

  private debounced: Subject<string> = new Subject<string>();

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue!: string;

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit() {
    this.debouncedSubscription = this.debounced
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
  }

  emitValue(value: string) {
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm: string) {
    // console.log(searchTerm)
    this.debounced.next(searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncedSubscription?.unsubscribe();
  }
}
