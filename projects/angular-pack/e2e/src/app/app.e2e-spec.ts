import { AppPage } from './app.po';

import { getCurrentRouteUrl } from '../utils/utils';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => (page = new AppPage()));

  it('should redirect to "about" route', () => {
    page.navigateTo();
    expect(getCurrentRouteUrl()).toEqual('about');
  });

  it('should have "About", "Features", "Examples" menus', () => {
    page.navigateTo();
    page
      .getAllMenus()
      .then(menus => expect(menus).toEqual(['About', 'Features', 'Examples']));
  });
});