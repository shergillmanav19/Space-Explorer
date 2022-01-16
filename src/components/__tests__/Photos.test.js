import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { act } from "react-dom/test-utils";
import { useLikedPhotos } from "../../hooks/useLikedPhotos";
import Error from "../Error";
import LikedPhotos from "../LikedPhotos";
import Photos from "../Photos";
const photos = [
  {
    title: "new photo",
    explanation: "adding new photo",
    url: "https://new-photo0.jpg",
    date: "2022-01-15",
  },
  {
    title: "new photo",
    explanation: "adding new photo",
    url: "https://new-photo1.jpg",
    date: "2022-01-15",
  },
  {
    title: "new photo",
    explanation: "adding new photo",
    url: "https://new-photo2.jpg",
    date: "2022-01-15",
  },
];
describe("Photos", () => {
  it("should display the given photos", () => {
    render(
      <Photos
        photos={photos}
        like={jest.fn()}
        unlike={jest.fn()}
        contains={jest.fn()}
      />
    );
    expect(screen.getAllByAltText("Cool image here").length).toBe(3);
  });
});
