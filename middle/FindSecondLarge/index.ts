export const getSecondLargest = (arg: number[]): number => {

  let largest = 0;
  let secondLargest = 0;

  // using forEach to get second largest
  arg.forEach(num => {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  });

  // can use old way
  // for (let i = 0; i < arg.length; i++) {
  //   if (arg[i] > largest) {
  //     secondLargest = largest;
  //     largest = arg[i];
  //   } else if (arg[i] > secondLargest) {
  //     secondLargest = arg[i];
  //   }
  // }

  return secondLargest
};