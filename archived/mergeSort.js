export function mergeSort(arr){
  if(arr.length === 1){
    return arr;
  }

  const middle = Math.floor(arr.length / 2);  //middle of array
  const left   = arr.slice(0, middle);        //left of middle
  const right  = arr.slice(middle);           //right of middle
  return helper_merge(
    mergeSort(left), 
    mergeSort(right)
  );
}

//left:  array of points to left of middle
//right: array of points to the right of the middle 
function helper_merge(left, right){
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length){
    if( left[indexLeft] < right[indexRight] ){
      result.push(left[indexLeft]);
      indexLeft++;
    }else{
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  //Add remaining indexes after all of one side is added to merged list
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
