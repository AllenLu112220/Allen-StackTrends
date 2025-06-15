import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';

@NgModule({
  declarations: [ AppComponent, SkillsListComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule      // ← add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
