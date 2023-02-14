//  1. TURN STRING SEQUENCE TO NUMERICAL VALUE
let stringSequence = '1 2 5'

function turnStringToNumberAnswer(param) {
  let strArray = param.split(' ')
  let i = 0;
  let value = 0;

  // LOOP OVER STRING VALUES IN ARRAY CONVERT TO NUMBER VALUE AND ADD VALUE TO TALLY SUM
  for(i=0; i < strArray.length;i++) {
    value += Number(strArray[i]);
  }

  // RETURN RESULT
  return value;
}

let answer = turnStringToNumberAnswer(stringSequence);
console.log(answer);



// 2. REVERSE ARRAY ORDER AND RETURN  
let stringArray = ['Hello World', 'Bye World', 'Useless World'];

function reverseString(param) {
  // SET EMPTY ARRAY TO COLLECT REVERSE VALUES
  stringArray = [];
  
  // MAP OVER ARRAY AND MANIPULATE INDIVIDUAL VALUE
  let result = param.map((item,index)=> {
    let stringToArray = item.split('');

    let i = 0;

    stringArray = [];
    for(i = 0; i < stringToArray.length;i++) {
      // CONDITION A VALUE TO BEGIN WITH IN ORDER TO PUSH
      if(stringArray.length > 0) {
        // CONDITION IF THE VALUE MATCHES CHANGE THE VALUE
        if(stringArray[i-1] == stringToArray[i]) {
          stringToArray[i] = '*';
          stringArray[i-1] = '*';
        }
      }
      // PUSH T0 ARRAY
      stringArray.push(stringToArray[i])
    }

    // RETURN ARRAY
    let array2 = stringArray.join('');
    
    // SPLIT ARRAY SPACE, REVERSE ORDER AND RE-JOIN
    let rearrangeOrder = array2.split(' ').reverse().join(' ');

    return rearrangeOrder;
  }) 

  // RETURN VALUE
  return result;
}

let example = reverseString(stringArray);
console.log(example)



// 3. FIZZ BUZZ
let fizzBuzzValues = [2,3,10,11,12,22,297];

function letsPlayFizzBuzz(param) {
  newArray = [];

  // MAP OVER VALUES AND MANIPULATE INDIVIDUAL VALUE
  param.map((item,index)=> {
    if 
      (item % 11 == 0 & item %3 == 0) newArray.push('fizzbuzz');
    else if 
      (item % 3 == 0) newArray.push('fizz');
    else if 
      (item % 11 == 0) newArray.push('buzz');
    else
      (newArray.push('baz'))
  }) 

  // RETURN VALUE
  return newArray;
}

let fizBuzzResults = letsPlayFizzBuzz(fizzBuzzValues);
console.log(fizBuzzResults);
