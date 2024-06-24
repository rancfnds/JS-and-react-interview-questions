### Template Literals in JavaScript

**Template literals** are a way to create strings in JavaScript that allow for easier inclusion of expressions and multiline strings. They are enclosed by backticks (`` ` ``) instead of single quotes (`'`) or double quotes (`"`).

### Key Features of Template Literals

1. **String Interpolation**: You can embed expressions inside a template literal using the `${expression}` syntax.
2. **Multiline Strings**: Template literals can span multiple lines without needing concatenation or special characters.
3. **Tagged Templates**: Advanced feature where a function can process a template literal.

### Usage

#### String Interpolation

String interpolation allows you to embed expressions inside a string. This is particularly useful for combining variables and strings.

**Example:**
```javascript
const name = 'John';
const age = 30;

// Using template literals
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is John and I am 30 years old.
```

#### Multiline Strings

Template literals allow you to create strings that span multiple lines without needing to concatenate strings or use newline characters (`\n`).

**Example:**
```javascript
// Using template literals
const multiLineString = `This is a string
that spans multiple
lines.`;

console.log(multiLineString);
// Output: 
// This is a string
// that spans multiple
// lines.
```

#### Tagged Templates

Tagged templates allow you to use a function to process a template literal. The function receives the literal parts of the template and the interpolated values as arguments.

**Example:**
```javascript
function tag(strings, ...values) {
  console.log(strings); // [ 'Hello, ', '!', '' ]
  console.log(values);  // [ 'John' ]
  
  return strings[0] + values[0] + strings[1] + values[1] + strings[2];
}

const name = 'John';
const greeting = tag`Hello, ${name}!`;

console.log(greeting);
// Output: Hello, John!
```

### More Examples

1. **Expressions inside Template Literals:**

You can perform operations inside the `${}`.

```javascript
const a = 10;
const b = 20;

const result = `The sum of a and b is ${a + b}.`;
console.log(result);
// Output: The sum of a and b is 30.
```

2. **Function Calls inside Template Literals:**

You can call functions inside the `${}`.

```javascript
function getName() {
  return 'Jane';
}

const message = `Hello, ${getName()}!`;
console.log(message);
// Output: Hello, Jane!
```

3. **Object Property Access inside Template Literals:**

You can access object properties inside the `${}`.

```javascript
const person = {
  name: 'Alice',
  age: 25
};

const info = `Name: ${person.name}, Age: ${person.age}`;
console.log(info);
// Output: Name: Alice, Age: 25
```

### Summary

Template literals in JavaScript offer a powerful and convenient way to work with strings, especially when dealing with string interpolation and multiline strings. Key benefits include:
- **String Interpolation**: Easily embed expressions within strings.
- **Multiline Strings**: Create strings that span multiple lines without special characters.
- **Tagged Templates**: Process template literals with functions for advanced use cases.

Using template literals enhances readability and maintainability of your code, making string operations more intuitive and less error-prone.