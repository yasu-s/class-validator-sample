import { Component } from '@angular/core';

import { EditData } from './view-models/edit-data.view-model';

@Component({
  selector: 'app-root',
  template: `
    <div>
      Name: <input name="name" type="text" [(ngModel)]="editData.name" />
      <span style="color: red;" *ngIf="editData.getErrors('name').length > 0">
        {{ editData.getErrors('name')[0] }}
      </span>
    </div>
    <div>
      Age: <input name="age" type="number" [(ngModel)]="editData.age" />
      <span style="color: red;" *ngIf="editData.getErrors('age').length > 0">
        {{ editData.getErrors('age')[0] }}
      </span>
    </div>
    <div>hasError: {{ editData.hasErrors }}</div>
  `,
})
export class AppComponent {
  /** 編集データ */
  editData = new EditData();
}
