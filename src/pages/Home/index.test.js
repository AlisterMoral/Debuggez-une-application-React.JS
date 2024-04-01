import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent.click(screen.getByText("Envoyer"));
      
      
      await waitFor(() => screen.getByText("Message envoyé !"));
      
      
      expect(screen.getByText("Message envoyé !")).toBeInTheDocument();
    });
  });

});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // À implémenter
  })
  it("a list a people is displayed", () => {
    // À implémenter
  })
  it("a footer is displayed", () => {
    // À implémenter
  })
  it("an event card, with the last event, is displayed", () => {
    // À implémenter
  })
});
