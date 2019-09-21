import {HomePage} from './home-page';

declare var angular: angular.IAngularStatic;

export default angular.module('angularjsApp.homePage', [])
  .component('homePage', {
    controller: HomePage,
    bindings: {
      message: '@'
    },
    template: require('html-loader!./home-page.html')
  }).name;
