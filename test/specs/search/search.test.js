const HomePage = require('../../pageobjects/home.page');

describe('Homepage search tests', () => {
    before('open homepage and close cookies', async ()=> {
        await HomePage.open();
        await HomePage.cookieCloseButton.click();
    });

    it('search with specific keyword', async () => {
        await HomePage.searchKeyword('kitap');
        await expect(HomePage.searchBox).toHaveValue('kitap',{ignoreCase:true});
    });

    it('scroll to deals', async ()=> {
        await HomePage.deals.scrollIntoView();
        await expect(HomePage.dealsText).toHaveText('Fırsatlar');
    });

    it('click on one of the deal', async ()=>{
        await HomePage.deals.scrollIntoView();
        await HomePage.clickDealCardItem(1);
    });
});


