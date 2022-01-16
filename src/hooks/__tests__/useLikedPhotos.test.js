import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useLikedPhotos } from "../useLikedPhotos";

describe("useLikedPhotos", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useLikedPhotos());
    act(() => {
      result.current.unlikeAll();
    });
    expect(result.current.likedPhotos).toHaveLength(0);
  });

  describe("like", () => {
    it("should add the liked photo to the local storage array", () => {
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
    });

    it("should not like the photo if it is already present", () => {
      const { result } = renderHook(() => useLikedPhotos());
      expect(result.current.likedPhotos).toHaveLength(0);

      act(() => {
        result.current.like(
          "new photo",
          "adding new photo",
          "https://new-photo.jpg",
          "2022-01-15"
        );
        result.current.like(
          "new photo",
          "adding new photo",
          "https://new-photo.jpg",
          "2022-01-15"
        );
      });
      expect(result.current.likedPhotos).toHaveLength(1);
    });
  });

  describe("unlike", () => {
    it("should remove the liked photo from the local storage array", () => {
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
      act(() => result.current.unlike("https://new-photo.jpg"));
      expect(result.current.likedPhotos).toHaveLength(0);
    });
  });
  describe("contains", () => {
    it("should return true because the picture is in liked photos", () => {
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
      expect(result.current.contains("https://new-photo.jpg")).toBe(true);
    });
    it("should return false because the picture is not in liked photos", () => {
      const { result } = renderHook(() => useLikedPhotos());
      expect(result.current.likedPhotos).toHaveLength(0);
      expect(result.current.contains("https://new-photo.jpg")).toBe(false);
    });
  });
  describe("unlikeAll", () => {
    it("should remove all liked photos", () => {
      const { result } = renderHook(() => useLikedPhotos());
      expect(result.current.likedPhotos).toHaveLength(0);

      act(() => {
        result.current.like(
          "new photo",
          "adding new photo",
          "https://new-photo0.jpg",
          "2022-01-15"
        );
      });
      act(() => {
        result.current.like(
          "new photo",
          "adding new photo",
          "https://new-photo1.jpg",
          "2022-01-15"
        );
      });
      act(() => {
        result.current.like(
          "new photo",
          "adding new photo",
          "https://new-photo2.jpg",
          "2022-01-15"
        );
      });
      expect(result.current.likedPhotos).toHaveLength(3);
      act(() => {
        result.current.unlikeAll();
      });
      expect(result.current.likedPhotos).toHaveLength(0);
    });
  });
});
