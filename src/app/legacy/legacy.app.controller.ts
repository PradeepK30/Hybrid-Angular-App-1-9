import { LegacyRouteHelper } from './routing/legacy.route-helper';

export class LegacyAppController {
  static $inject = ['legacyRouteHelper'];
  constructor(private legacyRouteHelper: LegacyRouteHelper) {}

  ajsShouldHandleRoute(): Boolean {
    console.log('LegacyAppController:: from angularjs');
    console.log(this.legacyRouteHelper);
    return this.legacyRouteHelper.ajsShouldHandleRoute();
  }
}
