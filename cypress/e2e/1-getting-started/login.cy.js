/// <reference types="cypress" />

context('acessar_link', () => {

  it('acessar_link', function() {
    cy.visit('/login/');
  });

  it('login', function() {
    cy.get('form .ng-valid-email').type('andreiars@compufacil.com.br');
    cy.get('form .ng-invalid-required').type('123456');
    cy.get('form button').click();
  });

});