describe("Bienvenido al curso de Cypress", () => {
  it("Mi primer test -> Hola mundo desde cypress", () => {
    cy.log("Hola mundo"); //imprimir en consola
    cy.wait(1500); //cuanto se tarda
  });

  it("Segundo test -> registro", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/"); //que pagina vas a visitar
    cy.get("#wsf-1-field-21").type("Arturo"); //# elemento . para las clases
    cy.wait(1000);
    cy.get("#wsf-1-field-22").type("Lopez Velazquez");
    cy.wait(1000);
    cy.get("#wsf-1-field-23").type("arturo.lopez.v0717@hotmail.com");
    cy.wait(1000);
    cy.get("#wsf-1-field-24").type("5523432355");
    cy.wait(1000);
    cy.get("#wsf-1-field-28").type("Estado de mexico");
    cy.get("#wsf-1-field-27").click(); //Boton

    cy.wait(4000);
  });
}); //cierre del script
