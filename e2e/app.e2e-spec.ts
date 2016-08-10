import { TrackingAppPage } from './app.po';

describe('tracking-app App', function() {
  let page: TrackingAppPage;

  beforeEach(() => {
    page = new TrackingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
