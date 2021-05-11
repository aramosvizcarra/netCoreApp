import { Component, OnInit } from '@angular/core';
import { AccountService } from '_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loggedIn: Boolean;
  constructor(private accounService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    console.log('model:'+ this.model);

    this.accounService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logout(){
    this.loggedIn = false;
  }
}
