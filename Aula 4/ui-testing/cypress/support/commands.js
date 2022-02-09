import loc from  '../support/locators'

Cypress.Commands.add('clickAddSkillButton', (label) => {
  cy.get(loc.BUTTON).click();
});
  
Cypress.Commands.add('visitSite', () => {
  cy.visit('http://localhost:3000/');
});