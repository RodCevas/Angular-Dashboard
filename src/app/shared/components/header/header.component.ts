import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.toggleMenu.emit();

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
