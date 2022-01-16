import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { act } from "react-dom/test-utils";
import Error from "../Error";
import ExplorePhotos from "../ExplorePhotos";
const params = {
  count: 20,
};
let container = null;

describe("ExplorePhotos", () => {
  it("should show loading", () => {
    render(<ExplorePhotos params={params} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  it("should show video filtering note", async () => {
    render(<ExplorePhotos params={params} />);
    await waitFor(
      () => {
        expect(document.querySelector("svg")).toBeInTheDocument();
        expect(
          screen.getByText("Videos have been filtered out")
        ).toBeInTheDocument();
      },
      {
        timeout: 5000,
      }
    );
  });
});
