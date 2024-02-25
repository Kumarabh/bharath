import { NgModule } from "@angular/core";
import {
} from "@angular/material";
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatTabsModule } from '@angular/material/tabs'
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from "./components/banner/banner.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { AsyncPipe, CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    AsyncPipe
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatTabsModule,
    BannerComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AsyncPipe
  ]
})

export class SharedModule {
}