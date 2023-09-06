const menuItems = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Community", href: "#" },
];

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("shows the links", () => {
    {
      menuItems.map((item) => {
        cy.get("footer")
          .get("a")
          .contains(item.text)
          .should("have.attr", "href", "/dashboard" + item.href);
      });
    }
  });

  it("shows the correct app version", () => {
    const appVersion = process.env.APP_VERSION || "";
    cy.get("footer").contains("Version: " + appVersion);
  });

  it("shows the logo", () => {
    cy.get("footer").get("img[alt='logo']");
  });
});
