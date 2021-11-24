import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { MessagesListService } from './services/messages-list.service';
import { MessagesListComponent } from './components/messages-list/messages-list.component';

import { HttpClientModule } from '@angular/common/http'

import { NbThemeModule, NbLayoutModule, NbButtonModule, NbInputModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GlobalChatPageComponent } from './pages/global-chat-page/global-chat-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesListComponent,
    LoginPageComponent,
    GlobalChatPageComponent,
    SignupPageComponent
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
