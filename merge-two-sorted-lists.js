function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      mergedArray.push(arr1[pointer1]);
      pointer1++;
    } else {
      mergedArray.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    mergedArray.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    mergedArray.push(arr2[pointer2]);
    pointer2++;
  }

  return mergedArray;
}

const array1 = [1,3,5];

const array2 = [2,4,6];