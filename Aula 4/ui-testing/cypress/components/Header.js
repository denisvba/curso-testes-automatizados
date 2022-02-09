import loc from  '../support/locators';

class Header {
    
    static assertHeaderTitle() {
       cy.get(loc.HEADER_TITLE).should('have.text', 'Developers App');
    }

}

export default Header;