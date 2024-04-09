import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';
import { IgxIconService } from 'igniteui-angular';
import {
  editor,
  logos,
  programming,
  finance,
} from '@igniteui/material-icons-extended';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-drawer-simple',
  styleUrls: ['./nav-drawer-simple.component.scss'],
  templateUrl: './nav-drawer-simple.component.html',
})
export class NavDrawerSimpleComponent {
  @ViewChildren(IgxNavigationDrawerComponent)
  navDrawers: QueryList<IgxNavigationDrawerComponent>;
  public navDrawerVisible: boolean = false;
  public navDrawerUser: boolean = false;
  public Enrollment: boolean = false;
  public System: boolean = false;
  public Mobile: boolean = false;
  public Messages: boolean = false;
  public Client_Admin: boolean = false;
  public User: boolean = false;
  public UserEnrollment: boolean = false;
  public UserSystem: boolean = false;
  public userMobile: boolean = false;
  public EnrollmentDetails: boolean = false;
  public value: string = '1';

  public allIcons = [...programming, ...finance, ...logos, ...editor];

  addIcons() {
    for (let icon of this.allIcons) {
      this.iconService.addSvgIconFromText(icon.name, icon.value, 'imx-icons');
    }
  }

  constructor(private iconService: IgxIconService, private router: Router) {}

  ngOnInit() {
    this.addIcons();
  }

  onClosed() {
    this.navDrawers.forEach((navDrawer) => {
      if (navDrawer.isOpen) {
        navDrawer.close();
      }
    });
  }

  toggleChildNavDrawer(navDrawerVisibleIndex: number) {
    switch (navDrawerVisibleIndex) {
      case 0:
        this.navDrawerVisible = false;
        break;
      case 1:
        this.navDrawerUser = false;
        break;
      case 2:
        this.Enrollment = false;
        break;
      case 3:
        this.System = false;
        break;
      case 4:
        this.Mobile = false;
        break;
      case 5:
        this.Messages = false;
        break;
      case 6:
        this.Client_Admin = false;
        break;
      case 7:
        this.User = false;
        break;
      case 8:
        this.UserEnrollment = false;
        break;
      case 9:
        this.UserSystem = false;
        break;
      case 10:
        this.userMobile = false;
        break;
      case 11:
        this.EnrollmentDetails = false;
        break;
      // Add cases for other child nav-drawers as needed
      default:
        break;
    }
  }

  moveToDashboard() {
    alert('done');
    this.router.navigate(['dashboard']);
  }
}
