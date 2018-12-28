import { Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule, URLSearchParams } from '@angular/http';
import { Input, Output, OnChanges, EventEmitter, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls:  ['./register-model.component.css'],
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
export class RegisterModelComponent implements OnInit , OnDestroy {

  userName: string = "";
  password: string = "";
  passwordConfirm: string ="";
  birthDate: any;
  currentDate: any;
  email: string = "";

  @Input() closable = true;
  @Input() visible: boolean;

  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private http: HttpClient, private httpM: Http) { 
    this.currentDate = new Date().toLocaleDateString();
    //for usa adte format
    //this.currentDate = this.currentDate.split('/')[1] + '/' + this.currentDate.split('/')[0] + '/' + this.currentDate.split('/')[2];

  }


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


  emailValidation(){
    console.log(this.email)
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(this.email));//true or false
  }


 usernameValidation() {
    var illegalChars = /\W/; // allow letters, numbers, and underscores

    if (this.userName == "") {
        alert("Please enter Username")
    } else if ((this.userName.length < 5) || (this.userName.length > 15)) {
           alert("Username must have 5-15 characters");
    } else if (illegalChars.test(this.userName)) {
           alert("Please enter valid Username. Use only numbers and alphabets");
    } 
    else alert("okey!");
}

  birthDateValidation(){
    this.birthDate = this.birthDate.toLocaleDateString();
    this.birthDate = this.birthDate.split('/')[1] + '/' + this.birthDate.split('/')[0] + '/' + this.birthDate.split('/')[2];
    if(Math.abs(this.birthDate.split('/')[2]-this.currentDate.split('/')[2]) < 18) alert("too young");
    else alert("okey!");
  }


}
