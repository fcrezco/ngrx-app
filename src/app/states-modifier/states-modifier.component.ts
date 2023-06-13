import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-states-modifier',
  templateUrl: './states-modifier.component.html',
  styleUrls: ['./states-modifier.component.scss'],
})
export class StatesModifierComponent {
  state$: Observable<number>;

  constructor(private store: Store<{ counterReducer: number }>) {
    this.state$ = store.select('counterReducer');
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
