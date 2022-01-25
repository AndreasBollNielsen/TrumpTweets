import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorsePipe } from './morse.pipe';
import { MyPipingComponent } from './my-piping/my-piping.component';
import { HashPipePipe } from './hash-pipe.pipe';
import { MyTweetingComponent } from './my-tweeting/my-tweeting.component';

@NgModule({
  declarations: [
    AppComponent,
    MorsePipe,
    MyPipingComponent,
    HashPipePipe,
    MyTweetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
