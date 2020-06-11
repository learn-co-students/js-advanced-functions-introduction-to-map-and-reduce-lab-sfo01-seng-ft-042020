// Your code here
function mapToNegativize(sourceArray) {
  let r = [];
  for (let i = 0; i < sourceArray.length; i ++){
    r.push(sourceArray[i] * -1);
  }
  return r;
}

function mapToNoChange(sourceArray) {
  let r = [];
  for (let i = 0; i < sourceArray.length; i ++){
    r.push(sourceArray[i]);
  }
  return r;
}

function mapToDouble(sourceArray) {
  let r = [];
  for (let i = 0; i < sourceArray.length; i ++){
    r.push(sourceArray[i] * 2);
  }
  return r;
}

function mapToSquare(sourceArray) {
  let r = [];
  for (let i = 0; i < sourceArray.length; i ++){
    r.push(sourceArray[i] ** 2);
  }
  return r;

}

function reduceToTotal(sourceArray, startingPoint = 0) {
  for (let i = 0; i < sourceArray.length; i ++){
    startingPoint += sourceArray[i];
  }
  return startingPoint;

}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i ++){
    if(!sourceArray[i]) {
      return false;
    }
  }
  return true;

}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i ++){
    if(sourceArray[i]) {
      return true;
    }
  }
  return false;

}