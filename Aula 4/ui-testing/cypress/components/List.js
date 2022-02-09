import loc from  '../support/locators';

class List {
    
    static assertListInfo(text) {
       return cy.get(loc.LIST).contains(text);
    }

}

export default List;