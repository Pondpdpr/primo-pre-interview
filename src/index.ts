const mergeTwoArray = (collection_1: number[], collection_2: number[]): number[] => {
  const finalSize = collection_1.length + collection_2.length;
  const result: number[] = [];
  let count_1 = 0;
  let count_2 = 0;
  while (result.length < finalSize) {
    if (count_1 == collection_1.length) {
      result.push(collection_2[count_2]);
      count_2++;
    } else if (count_2 == collection_2.length) {
      result.push(collection_1[count_1]);
      count_1++;
    } else {
      if (collection_1[count_1] < collection_2[count_2]) {
        result.push(collection_1[count_1]);
        count_1++;
      } else {
        result.push(collection_2[count_2]);
        count_2++;
      }
    }
  }
  return result;
};

const mergeTwoArrayReverse = (collection_1: number[], collection_2: number[]): number[] => {
  const finalSize = collection_1.length + collection_2.length;
  const result: number[] = [];
  let count_1 = 0;
  let count_2 = collection_2.length - 1;
  while (result.length < finalSize) {
    if (count_1 == collection_1.length) {
      result.push(collection_2[count_2]);
      count_2--;
    } else if (count_2 == -1) {
      result.push(collection_1[count_1]);
      count_1++;
    } else {
      if (collection_1[count_1] < collection_2[count_2]) {
        result.push(collection_1[count_1]);
        count_1++;
      } else {
        result.push(collection_2[count_2]);
        count_2--;
      }
    }
  }
  return result;
};

const merge = (collection_1: number[], collection_2: number[], collection_3: number[]): number[] => {
  return mergeTwoArray(mergeTwoArrayReverse(collection_1, collection_2), collection_3);
};

export { merge, mergeTwoArray, mergeTwoArrayReverse };
