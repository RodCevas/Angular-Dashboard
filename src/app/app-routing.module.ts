import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ContactsComponent } from './modules/contacts/contacts.component';
import { FaqComponent } from './modules/faq/faq.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { AppComponent } from './app.component';



const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'contacts',
    component: ContactsComponent
  }, {
    path: 'faq',
    component: FaqComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
