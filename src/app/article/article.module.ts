import { NgModule } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

import { ArticleListComponent } from './article-list/article-list.component';

declare var angular: angular.IAngularStatic;

@NgModule({
  declarations: [
    ArticleListComponent
  ],
  entryComponents: [ArticleListComponent]
})
export class ArticleModule { }

export const angularjsAppArticle = 'angularjsApp.article';

angular
  .module(angularjsAppArticle, [])
  .directive(
    'appArticleList',
    downgradeComponent({ component: ArticleListComponent }) as angular.IDirectiveFactory
  );
