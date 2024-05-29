import { merge, mergeTwoArray, mergeTwoArrayReverse } from "./index";

describe("all merge", () => {
  test("merge two", async () => {
    const collection_1 = [1, 2];
    const collection_2 = [3, 4];
    const expectedCollection = [1, 2, 3, 4];
    expect(mergeTwoArray(collection_1, collection_2)).toEqual(expectedCollection);
  });
  test("merge two reverse", async () => {
    const collection_1 = [1, 2];
    const collection_2 = [4, 3];
    const expectedCollection = [1, 2, 3, 4];
    expect(mergeTwoArrayReverse(collection_1, collection_2)).toEqual(expectedCollection);
  });
  test("final merge", async () => {
    const collection_1 = [1, 2];
    const collection_2 = [4, 3];
    const collection_3 = [5, 6];
    const expectedCollection = [1, 2, 3, 4, 5, 6];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expectedCollection);
  });
});
