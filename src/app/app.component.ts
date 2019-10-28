import { Component } from '@angular/core';

import { EditData } from './view-models/edit-data.view-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /** 編集データ */
  editData = new EditData();
}
