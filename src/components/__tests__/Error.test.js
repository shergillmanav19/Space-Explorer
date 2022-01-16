import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Error from "../Error";

describe("error", () => {
  it("should show an error", () => {
    act(() => {
      render(
        <div>
          <Error error="Error" setError={() => {}} />
        </div>
      );
    });
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
});
