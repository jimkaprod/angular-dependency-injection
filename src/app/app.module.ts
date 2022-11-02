import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CoursesModule } from './modules/courses/courses.module';
import { HttpClientModule } from '@angular/common/http';
import { CoursesUseClassModule } from './modules/courses-useClass/courses-use-class.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CoursesModule,
    HttpClientModule,
    CoursesUseClassModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
