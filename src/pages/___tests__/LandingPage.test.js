import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LandingPage from "../LandingPage";

describe("Landing page", () => {
  it("should render all button texts", () => {
    render(<LandingPage />);
    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByText("My Liked Pics")).toBeInTheDocument();
  });

  it("should render search bar if explore button active", () => {
    render(<LandingPage />);
    // Explore button by default is active
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
