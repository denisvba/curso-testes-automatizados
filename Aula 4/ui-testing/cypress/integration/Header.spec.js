import Header from '../components/Header';

describe('Header test', () => {

    before(() => {
        cy.visitSite();
    });

    it('User should be able to see Header title', () => {
        Header.assertHeaderTitle();
    });
});