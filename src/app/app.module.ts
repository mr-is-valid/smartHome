import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LuncherComponent } from './components/luncher/luncher.component';
import { AutoWaterComponent } from './components/auto-water/auto-water.component';
import { FitnessComponent } from './components/fitness/fitness.component';
import { SeriesAndMoviesComponent } from './components/series-and-movies/series-and-movies.component';

import { MatCardModule , MatDividerModule , MatDatepickerModule, MatOptionModule , MatSelectModule,
         MatNativeDateModule, MatInputModule , MatFormFieldModule , MatRadioModule , MatCheckboxModule} from '@angular/material';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MainMenuComponent } from '../app/components/main-menu/main-menu.component';
import { RegisterModelComponent } from '../../src/modals/register-model/register-model.component';

const routes: Routes = [
  { path: 'luncher',   component: LuncherComponent },
  { path: 'autoWater', component: AutoWaterComponent },
  { path: 'fitness',   component: FitnessComponent },
  { path: 'seriesAndMovies', component: SeriesAndMoviesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LuncherComponent,
    AutoWaterComponent,
    FitnessComponent,
    SeriesAndMoviesComponent,
    LoginModalComponent,
    MainMenuComponent,
    RegisterModelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    
    MatCardModule , MatDividerModule , MatDatepickerModule, MatOptionModule , MatSelectModule,
    MatNativeDateModule, MatInputModule , MatFormFieldModule, MatRadioModule , MatCheckboxModule,
    
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [ RouterModule , BsDropdownModule, TooltipModule, ModalModule ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
