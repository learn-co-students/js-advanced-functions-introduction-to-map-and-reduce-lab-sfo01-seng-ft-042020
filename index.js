const mapToNegativize = (array) => {
  return array.map(element => element * -1);
}

const mapToNoChange = (array) => {
  return array.map(element => element);
}

const mapToDouble = (array) => {
  return array.map(el => el * 2);
}

const mapToSquare = (array) => {
  return array.map(el => el ** 2);
}

const reduceToTotal = (array, start=0) => {
  let total = start;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function reduceToAllTrue(arr){
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) return false
  }
  return true
}


function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return true;
  }
  return false;
};
