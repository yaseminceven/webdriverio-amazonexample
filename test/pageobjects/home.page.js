const Page = require('./page');

class HomePage extends Page{
   /**
     * selectors for homepage
     */
   get searchBox (){ return $('#twotabsearchtextbox')};

   get searchResult (){ return $('.a-color-state.a-text-bold')};

   get deals(){ return $('.deals-shoveler-v2')};

   get dealsText(){ return $('.deals-shoveler-v2 h2')};

   dealItem(index){ return $(`(//div[@class='deals-shoveler-v2']//span[@class='a-list-item'])[${index}]`)};
   
    async clearSearchbox(){
      await this.searchBox.waitForDisplayed();
      await this.searchBox.click();
      await this.searchBox.clearValue();
    }

    /**
     * search for keyword
     * @param {String} keyword text to search
     */
    async searchKeyword(keyword){
      await this.searchBox.waitForDisplayed();
      await this.searchBox.click();
      await this.searchBox.keys(keyword);
      await this.searchBox.keys("Enter");
   }

    async getDealCardTitle(){
      return this.abroadDealsText.getText();
    }

    /**
     * search for keyword
     * @param {int} index position of the card
     */
    async clickDealCardItem(index){
      await this.dealItem(index).click();
    }

   open(){
    return super.open('');
   }
}

module.exports = new HomePage();