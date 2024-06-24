**Event listeners** in JavaScript are functions that wait for a specific event to occur on a DOM element and then execute a callback function in response to that event. They allow you to define behavior or actions that should happen when a user interacts with a web page, such as clicking a button, hovering over an element, submitting a form, etc.

### Example of Attaching an Event Listener

Let's demonstrate how to attach an event listener to a button element (`<button>`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Listener Example</title>
</head>
<body>
  <button id="myButton">Click Me</button>

  <script>
    // Select the button element by its ID
    const button = document.getElementById('myButton');

    // Attach an event listener for 'click' event
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  </script>
</body>
</html>
```

### Explanation

1. **Selecting the Element**: Use `document.getElementById('myButton')` to select the button element with ID `myButton`.
   
2. **Attaching an Event Listener**: Use `addEventListener()` method on the selected element (`button`) to attach a listener for a specific event (`'click'` in this case).

3. **Event Handling Function**: Provide a callback function that will be executed when the event (`'click'`) occurs on the button.
   
4. **Event Handling**: In this example, when the button is clicked, the browser will display an alert with the message `'Button clicked!'`.

### More Examples of Event Listeners

- **Hover Event (mouseover and mouseout)**:
  
  ```javascript
  const element = document.getElementById('myElement');
  
  element.addEventListener('mouseover', function() {
    console.log('Mouse over element');
  });
  
  element.addEventListener('mouseout', function() {
    console.log('Mouse out of element');
  });
  ```

- **Form Submission**:
  
  ```javascript
  const form = document.getElementById('myForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted');
    // Handle form data or perform validation
  });
  ```

### Benefits of Event Listeners

- **Separation of Concerns**: Keep HTML structure and JavaScript behavior separate.
- **Dynamic Event Handling**: Handle events on elements that are dynamically created or modified.
- **Multiple Events**: Attach multiple listeners to the same element for different events (e.g., `'click'`, `'mouseover'`, `'submit'`).

### Conclusion

Event listeners are essential for creating interactive and responsive web applications. They allow developers to define behavior based on user interactions with elements on the web page. Understanding how to attach event listeners and handle events effectively is fundamental to modern JavaScript programming and web development.