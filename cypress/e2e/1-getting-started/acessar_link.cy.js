/// <reference types="cypress" />

acessar_link('acessar_link', () => {
  it('acessar_link', function() {
    cy.visit('http://staging.clippfacil.com.br:8000/#/login/');
  });
});