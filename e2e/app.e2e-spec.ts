import { Ng2ToAzurePage } from './app.po';

describe('ng2-to-azure App', function() {
  let page: Ng2ToAzurePage;

  beforeEach(() => {
    page = new Ng2ToAzurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
