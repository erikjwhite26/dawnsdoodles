import { Dawnsdoodles3Page } from './app.po';

describe('dawnsdoodles3 App', () => {
  let page: Dawnsdoodles3Page;

  beforeEach(() => {
    page = new Dawnsdoodles3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
