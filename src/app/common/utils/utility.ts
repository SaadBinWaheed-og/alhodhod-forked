export const sliceInChunks = (array: string[], chunkSize: number) => {
  return array.reduce(
    (resultArray: string[][], item: string, index: number) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );
};
