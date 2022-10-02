const HomePage = require('../../pageobjects/home.page');

describe('Search tests', () => {
    var keywords = ["kitap","ayna","dolap"];
    before('open homepage and close cookies', async ()=> {
        await HomePage.open();
        await HomePage.cookieCloseButton.click();
    });
    keywords.forEach(async (keyword)=> {
        it('search with '+keyword, async ()=> {
            await HomePage.clearSearchbox();
            await HomePage.searchKeyword(keyword);
            await expect(HomePage.searchResult).toHaveText('"'+keyword+'"',{ignoreCase:true});
        });
    });
});


