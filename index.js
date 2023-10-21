const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
 let newArray = [...tutorials]
 let temp = ''
 let temp2 = ''

 for (let j = 0; j < newArray.length; j++) {
    let test = newArray[j].split(' ')
    let test2 = test.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    temp = []
    for (let i = 0; i < test2.length; i++) {

      if (i !== test2.length - 1) {
        temp += test2[i] + ' '
        }else {
        temp += test2[i]
        }
      temp2 = temp 
    }

  newArray[j] = temp2
 }
return newArray
}


