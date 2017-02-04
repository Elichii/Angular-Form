import { Lab16Page } from './app.po';

describe('lab16 App', function() {
  let page: Lab16Page;

  beforeEach(() => {
    page = new Lab16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
