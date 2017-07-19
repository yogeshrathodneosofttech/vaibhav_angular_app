import { LoyaltystorePage } from './app.po';

describe('loyaltystore App', () => {
  let page: LoyaltystorePage;

  beforeEach(() => {
    page = new LoyaltystorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
