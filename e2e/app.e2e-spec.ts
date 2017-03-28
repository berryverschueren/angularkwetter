import { MyKwetterAppPage } from './app.po';

describe('my-kwetter-app App', () => {
  let page: MyKwetterAppPage;

  beforeEach(() => {
    page = new MyKwetterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
