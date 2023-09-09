import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Loading data", () => {
  it("should show the loading spinner when loading data and then hide it", () => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    cy.visit("http://localhost:3000/dashboard");

    cy.get("img[alt='Loading']").should("be.visible");

    cy.wait("@getProjects");

    cy.get("img[alt='Loading']").should("not.exist");
  });
});

describe.only("Error screen", () => {
  it("should show an error message when the request fails", () => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      forceNetworkError: true,
    });

    cy.visit("http://localhost:3000/dashboard");

    cy.get('[data-cy="alert"]', { timeout: 10000 }).should("be.visible");
  });
});

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          let status = mockProjects[index].status;
          if (status === "error") status = "critical";
          if (status === "info") status = "stable";
          cy.wrap($el).contains(capitalize(status));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
