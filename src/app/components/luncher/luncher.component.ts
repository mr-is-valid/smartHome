import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-luncher',
  templateUrl: './luncher.component.html',
  styleUrls: ['./luncher.component.css']
})
export class LuncherComponent implements OnInit {


  constructor(private router: Router, private activeRoute: ActivatedRoute){ }


  ngOnInit() {
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
