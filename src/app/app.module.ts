import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import('angular');
import('angular-animate');
import('angular-aria');
import('angular-material');
import('angular-resource');
import('angular-sanitize');
import('angular-ui-router');

import homePage from './angularjs/home/home.module';
import { ArticleListComponent } from './article/article-list/article-list.component';

declare var angular: angular.IAngularStatic;

@NgModule({
  declarations: [
    // AppComponent
  ArticleListComponent],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['angularjsApp']);
  }
}

angular
  .module('angularjsApp', [
    homePage
  ]);
