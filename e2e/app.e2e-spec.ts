import { DiplomPage } from './app.po';

describe('diplom App', () => {
  let page: DiplomPage;

  beforeEach(() => {
    page = new DiplomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
