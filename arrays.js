var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, elem){
  return [elem,...arr]
}

function addElementToBeginningOfArray(arr, elem){
  return arr.unshift(elem)
}

function addElementToEndOfArray(arr, elem){
  return [...arr, elem]
}