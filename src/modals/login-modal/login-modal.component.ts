import { Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { Input, Output, OnChanges, EventEmitter, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls:  ['./login-modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class LoginModalComponent implements OnInit , OnDestroy{

   userName: any;
   password: any;

  @Input() closable = true;
  @Input() visible: boolean;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private http: HttpClient, private httpM: Http) { }


  @HostListener(' document : keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log(event.keyCode);
    if ( event.keyCode === 27 ) { this.close(); }
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  close() {
    // console.log(this.currentIronDome);
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  send(){
    console.log(this.userName);
    if (this.password.length < 6)
     {
        alert("too_short");
        return("too_short");
     } else if (this.password.length > 50) 
          {
              alert("too_long");
              return("too_long");
           } else if (this.password.search(/\d/) == -1) 
                {
                  alert("no_num");
                  return("no_num");
                } else if (this.password.search(/[a-zA-Z]/) == -1) 
                    {
                        alert("no_letter");
                        return("no_letter");
                    } else if (this.password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) 
                        {
                            alert("bad_char");
                            return("bad_char");
                        }
  alert("okey!!!");
  return("ok");
  }

}
