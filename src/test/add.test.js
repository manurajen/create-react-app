const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('Should add two numbers', () => {
  const result = add(3,4);
  // normal method
  // if(result !== 7){
  //   throw new Error('Expected out is 7. but getting ${result}');
  // };
  // inbuild method
  expect(result).toBe(7);
});


test('should generate greeting from name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe('Hello Mike');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous');
});


// check object return

let personFactory = function(firstname,lastname){
  return {
    firstname,
    lastname,
  };
}

test('name should be firstname and lastname', () => {
  let johnDoe = personFactory('John','Doe');
  expect(johnDoe).toEqual({
    firstname: 'John',
    lastname: 'Doe'
  });
});

// check function return
let personFactoryfn = function(firstname,lastname){
  return {
    firstname,
    lastname,
    greeting: function(){
      return `Hello ${this.firstname} ${this.lastname}`;
    }
  };
}

test('return value should be Hello firstname lastname', () => {
  let johnDoe = personFactoryfn('John','Doe');
  expect(johnDoe.greeting()).toBe('Hello John Doe');
});

