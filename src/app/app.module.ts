import { CommentService } from './comments/comment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule

  ],
 // providers: [CommentService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
