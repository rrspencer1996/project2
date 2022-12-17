import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DivComponent } from './div/div.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { MastheadComponent } from './masthead/masthead.component';
import { TaskerComponent } from './tasker/tasker.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    BottomNavComponent,
    FooterComponent,
    DivComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    TaskComponent,
    MastheadComponent,
    TaskerComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
