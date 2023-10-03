/* eslint-disable @typescript-eslint/no-use-before-define */
import { RepositoryPageData } from '../support/page-data/repository';

const pd = new RepositoryPageData();

describe('Repository flow', () => {
    const validKey = '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';

    beforeEach(() => cy.visit(pd.authUrl));

    it('should go to repositories list and check the pagination', () => {
        pasteKey(validKey);
        cy.getTagged(pd.goToRepositories).click();
        cy.url().should('include', pd.repositoriesUrl);
        cy.wait(2000);
        cy.getTagged(pd.repositoriesList).children().should('have.length', 30);

        // change page size to 10
        cy.get('.mat-mdc-paginator-page-size-select').click().then(() => {
            cy.get('[id=mat-option-0]').click();
            cy.wait(2000);
            cy.getTagged(pd.repositoriesList).children().should('have.length', 10);
        });

        // change page size to 50
        cy.get('.mat-mdc-paginator-page-size-select').click().then(() => {
            cy.get('[id=mat-option-5]').click();
            cy.wait(2000);
            cy.getTagged(pd.repositoriesList).children().should('have.length', 50);
        });

        cy.get('.mat-mdc-paginator-navigation-previous').should('have.attr', 'disabled');
        cy.get('.mat-mdc-paginator-navigation-next').click().then(() => {
            cy.wait(2000);
            cy.get('.mat-mdc-paginator-navigation-previous').should('not.have.attr', 'disabled');
        });
    });

    it('should check repository details', () => {
        pasteKey(validKey);
        cy.getTagged(pd.goToRepositories).click();
        cy.getTagged(pd.repositoryItem).first().click();

        cy.getTagged(pd.repositoryTitleText).should('exist');

        cy.getTagged(pd.cardActionsShowIssuesBtn).click().then(() => {
            cy.wait(2000);
            cy.getTagged(pd.issuesList).should('exist');
        });

        cy.getTagged(pd.cardActionsHideIssuesBtn).click().then(() => {
            cy.getTagged(pd.issuesList).should('not.exist');
        });
    });
});

function pasteKey(key: string): void {
    cy.getTagged(pd.formInput).find('input').type(key);
    cy.getTagged(pd.authSubmitBtn).click();
}
