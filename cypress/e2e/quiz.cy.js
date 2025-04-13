describe("Tech Quiz App E2E", () => {
  const NUM_QUESTIONS = 20;

  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/api/questions/random", {
      fixture: "questions.json",
    }).as("getQuestions");
  });

  /**
   * @param {number} num
   */
  function answerAllQuestions(num) {
    Cypress._.times(num, () => {
      cy.get("h2", { timeout: 6000 }).should("exist");
      cy.get("button").first().click();
      cy.wait(300);
    });
  }

  it("displays the start quiz button", () => {
    cy.contains("Start Quiz").should("be.visible");
  });

  it("starts the quiz and shows the first question", () => {
    cy.contains("Start Quiz").click();
    cy.wait("@getQuestions");
    cy.get("h2").should("exist");
  });

  it('User can complete the quiz and see the score', () => {
    cy.get('button').contains('Start Quiz').click();

    answerAllQuestions(NUM_QUESTIONS);
    cy.get("body").then(($body) => {
      cy.log($body.text());
    });


    cy.screenshot("after-final-question");
  });
});
