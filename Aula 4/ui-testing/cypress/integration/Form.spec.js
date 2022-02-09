import Form from '../components/Form';
import List from '../components/List';

describe('Form test', () => {

    before(() => {
        cy.visitSite();    
    });

    it('User should be able to type text in fields', () => {
        Form.inputSkillName('QA Test');
        Form.inputDeveloper('Front-End');
        Form.inputTechnologies('React');
        Form.inputRoles('Test');
    });

    it('User should be able to type text in fields and click Add Skill button', () => {
        Form.inputSkillName('QA Test');
        Form.inputRoles('Test');

        cy.clickAddSkillButton();

        List.assertListInfo('Skill Name: front-end');
    });
});