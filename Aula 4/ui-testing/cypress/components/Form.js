import loc from  '../support/locators';

class Form {
    
    static inputSkillName(name) {
       cy.get(loc.INPUT_SKILL_NAME).type(name);
    }

    static inputDeveloper(name) {
        cy.get(loc.INPUT_DEVELOPERS).type(name);
     }

     static inputTechnologies(name) {
        cy.get(loc.INPUT_TECHNOLOGIES).type(name);
     }

     static inputRoles(name) {
        cy.get(loc.INPUT_ROLES).type(name);
     }

}

export default Form;