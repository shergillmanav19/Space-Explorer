import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useLikedPhotos } from "../../hooks/useLikedPhotos";
import LikedPhotos from "../LikedPhotos";

describe("error", () => {
  it("should contain an unlike all button", () => {
    render(<LikedPhotos />);
    expect(document.querySelector("button")).toBeInTheDocument();
  });
  it("should contain picture that is liked ", () => {
    const { result } = renderHook(() => useLikedPhotos());
    expect(result.current.likedPhotos).toHaveLength(0);
    act(() => {
      result.current.like(
        "new photo",
        "adding new photo",
        "https://new-photo.jpg",
        "2022-01-15"
      );
    });
    expect(result.current.likedPhotos).toHaveLength(1);
    render(<LikedPhotos />);
    expect(screen.getAllByAltText("Cool image here").length).toEqual(1);
  });
});
