// cypress/e2e/forms.cy.js

describe('Create Set Form', () => {
  beforeEach(() => {
    cy.visit('/create-set');
  });

  it('should show an error when submitting an empty string', () => {
    cy.get('[data-cy="create-set-form"]').within(() => {
      cy.get('[data-cy="set-name-input"]').clear();
      cy.root().submit();
    });
    cy.get('[data-cy="form-error"]').should('exist');
  });
});
