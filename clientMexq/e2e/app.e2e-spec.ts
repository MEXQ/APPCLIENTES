import { ClientMexqPage } from './app.po';

describe('client-mexq App', () => {
  let page: ClientMexqPage;

  beforeEach(() => {
    page = new ClientMexqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
