import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


//

import { GridsterModule } from 'angular-gridster2';

import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import {Example3Component} from './components/example3/example3.component';
import { RSidebarComponent } from './shared/r-sidebar/r-sidebar.component'
//
@NgModule({
  declarations: [
        LayoutComponent,
    Example1Component,
    Example2Component,Example3Component,
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    LayoutComponent,
    LayoutItemDirective,
    RSidebarComponent
    
  ],
  imports: [MatIconModule,MatButtonModule,
    BrowserModule,
    GridsterModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    Example1Component,
    Example2Component,Example3Component
  ]
})
export class AppModule { }
