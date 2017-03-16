import { MexQAppPage } from './app.po';

describe('mex-qapp App', function() {
  let page: MexQAppPage;

  beforeEach(() => {
    page = new MexQAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
