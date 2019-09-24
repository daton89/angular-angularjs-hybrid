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
import { ArticleModule, angularjsAppArticle } from './article/article.module';
import { SharedService } from 'shared/shared.service';

declare var angular: angular.IAngularStatic;

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    ArticleModule
  ],
  providers: [
    SharedService
  ],
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
    angularjsAppArticle,
    homePage,
  ]);
