import { BusykidfrontendPage } from './app.po';

describe('busykidfrontend App', () => {
  let page: BusykidfrontendPage;

  beforeEach(() => {
    page = new BusykidfrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
