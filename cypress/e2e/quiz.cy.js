describe("Tech Quiz App E2E", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it("starts the quiz and answers all the questions", () => {
      cy.contains("Start Quiz").click();
  
      for (let i = 0; i < 10; i++) {
        cy.get("[data-cy=question]").should("exist");
        cy.get("[data-cy=answer-option]").first().click();
      }
  
      cy.contains("Your Score").should("be.visible");
      cy.contains("Start New Quiz").should("be.visible").click();
      cy.contains("Start Quiz").should("be.visible");
    });
  });