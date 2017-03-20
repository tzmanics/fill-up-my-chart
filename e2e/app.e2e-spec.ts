import { FillUpMyChartPage } from './app.po';

describe('fill-up-my-chart App', () => {
  let page: FillUpMyChartPage;

  beforeEach(() => {
    page = new FillUpMyChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
