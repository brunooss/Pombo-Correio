import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessagesListService } from './messages-list.service';
import { MessagesListComponent } from './messages-list/messages-list.component';

import { HttpClientModule } from '@angular/common/http'

import { NbThemeModule, NbLayoutModule, NbButtonModule, NbInputModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    HttpClientModule
  ],
  providers: [
    MessagesListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
