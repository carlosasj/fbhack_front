import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



const ngMat = [
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  TagInputModule,
  FormsModule,
  MatCardModule,
  MatChipsModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...ngMat,
  ],
  declarations: [ ],
  exports: [
    ...ngMat
  ]
})
export class NgmatModule { }
