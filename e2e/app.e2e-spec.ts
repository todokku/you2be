import { You2tubePage } from './app.po';

describe('you2tube App', () => {
  let page: You2tubePage;

  beforeEach(() => {
    page = new You2tubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
