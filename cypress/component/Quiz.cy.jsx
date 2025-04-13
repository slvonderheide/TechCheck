import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../client/src/components/Quiz'; // Adjust the import path as necessary
describe("Quiz Component", () => {
  beforeEach(() => {
    mount(<Quiz />);
  });

  it("renders the Quiz component with Start Quiz button", () => {
    cy.contains("Start Quiz").should("be.visible");
  });

  it("starts the quiz on Start Quiz button click", () => {
    cy.contains("Start Quiz").click();
    cy.get("[data-cy=question]").should("be.visible");
  });
});
