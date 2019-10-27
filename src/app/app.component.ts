import { Component } from '@angular/core';
import { MaxLength, Max, Min, IsNotEmpty } from 'class-validator';

import { NotifyErrorInfoViewModel } from './view-models/notify-error-info.view-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends NotifyErrorInfoViewModel {
  title = 'ng-sample';

  /** name */
  @MaxLength(20, { message: 'name は 20文字以内で入力してください。' })
  @IsNotEmpty({ message: 'name を入力してください。' })
  set name(value: string) {
    this._name = value;
    this.onPropertyChanged('name');
  }
  get name() {
    return this._name;
  }

  /** age */
  @Max(99, { message: 'age は 10～99で入力してください。' })
  @Min(10, { message: 'age は 10～99で入力してください。' })
  set age(value: number) {
    this._age = value;
    this.onPropertyChanged('age');
  }
  get age() {
    return this._age;
  }

  /** name */
  private _name = '';

  /** age */
  private _age = 20;
}
