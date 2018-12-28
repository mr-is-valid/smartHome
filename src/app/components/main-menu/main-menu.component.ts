import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  showLoginDialog: boolean;
  showRegisterDialog: boolean;

  constructor(private router: Router, private activeRoute: ActivatedRoute){ }


  ngOnInit() {
    this.showLoginDialog =  false;
    this.showRegisterDialog = false;
  }

  openRegisterDialog(){
    this.showRegisterDialog = !this.showRegisterDialog;
  }

  openLoginDialog() {
    this.showLoginDialog = !this.showLoginDialog;
  }

  openHome(){
    this.router.navigate(['/luncher']);
  }

  openAutoWater(){
    this.router.navigate(['/autoWater']);
  }

  openFitness(){
    this.router.navigate(['/fitness']);
  }

  openSeriesAndMovies(){
    this.router.navigate(['/seriesAndMovies']);
  }

}
