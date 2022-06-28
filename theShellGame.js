find_the_ball=function(start,swaps){
  if (swaps === []) return start;
  
  let position = start;
  
  for (let item of swaps) {
    if (item[0] === position) position = item[1];
    else if (item[1] === position) position = item[0];
  }
  return position;
}
