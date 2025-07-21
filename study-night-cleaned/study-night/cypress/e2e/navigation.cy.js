// cypress/e2e/navigation.cy.js

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Home page', () => {
    cy.get('[data-cy="nav-home"]').click();
    cy.url().should('include', '/');
    cy.get('[data-cy="home-page"]').should('exist');
  });

  it('should navigate to About page', () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.url().should('include', 'about');
    cy.get('[data-cy="about-page"]').should('exist');
  });

  it('should navigate to Create Set page', () => {
    cy.get('[data-cy="nav-create-set"]').click();
    cy.url().should('include', 'create-set');
    cy.get('[data-cy="create-set-page"]').should('exist');
  });
});
