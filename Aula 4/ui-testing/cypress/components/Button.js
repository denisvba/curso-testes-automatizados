import loc from  '../support/locators';

class Button {
    
    static assertAddSkillButtonExist() {
       cy.get(loc.BUTTON).should('be.visible');
    }

}

export default Button;