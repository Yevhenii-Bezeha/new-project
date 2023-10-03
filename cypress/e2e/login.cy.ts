/* eslint-disable @typescript-eslint/no-use-before-define */
import { AuthPageData } from '../support/page-data/auth';

const pd = new AuthPageData();

describe('Auth flow', () => {
    beforeEach(() => cy.visit('/'));

    it('should see correct home title', () => {
        cy.visit('/');
        cy.getTagged(pd.title).should('contain.text', 'Welcome to GitHubExplorer');
        cy.getTagged(pd.subTitle).should('contain.text', 'Log In to start Your Journey');
    });

    it('should go to auth page and see the error when key is invalid', () => {
        const invalidKey = 'invalid key';

        goToAuthPage();

        // type invalid key
        cy.getTagged(pd.formInput).find('input').type(invalidKey);
        cy.getTagged(pd.authSubmitBtn).click();

        // see the error text and toaster
        pasteKey(invalidKey);
        cy.getTagged(pd.invalidKeyText).should(
            'contain.text',
            'The token you provided is invalid. Please follow these instructions to generate a new Token'
        );
        cy.get('.mat-mdc-snack-bar-container').should('exist');
    });

    it('should paste correct api key and see correct home title', () => {
        const validKey = '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';

        goToAuthPage();
        pasteKey(validKey);

        cy.url().should('include', 'home');
        cy.getTagged(pd.title).should('contain.text', 'You are now logged in');
        cy.getTagged(pd.subTitle).should('contain.text', 'Your Hub for GitHub');
    });
});

function goToAuthPage(): void {
    cy.getTagged(pd.goToLoginBtn).click();
    cy.url().should('include', 'auth');
}

function pasteKey(key: string): void {
    cy.getTagged(pd.formInput).find('input').type(key);
    cy.getTagged(pd.authSubmitBtn).click();
}
