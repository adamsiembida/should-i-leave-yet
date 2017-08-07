import { WhenShouldILeavePage } from './app.po';

describe('when-should-i-leave App', () => {
  let page: WhenShouldILeavePage;

  beforeEach(() => {
    page = new WhenShouldILeavePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
