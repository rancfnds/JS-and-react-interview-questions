**Event delegation** is a technique in JavaScript where you attach an event listener to a parent element instead of attaching it to multiple child elements individually. This parent element then listens for events bubbling up from its child elements. When an event occurs, you can determine which specific child element triggered the event and handle it accordingly.

### Why is Event Delegation Useful?

Event delegation offers several advantages in web development:

1. **Efficiency and Performance**:
   - Instead of attaching event handlers to each individual child element, you attach a single event handler to the parent element. This reduces the number of event handlers, which can improve performance, especially on large documents or when dealing with dynamically added content.

2. **Simplicity and Maintainability**:
   - Event delegation simplifies your code by centralizing event handling logic. You don't need to worry about attaching and removing event handlers to dynamically created elements or elements that might change over time.

3. **Handling Dynamically Added Elements**:
   - When new elements are added to the DOM dynamically (e.g., through Ajax requests or JavaScript code), event delegation ensures that these elements automatically inherit the event handlers from their parent. You don't need to re-attach handlers to new elements.

4. **Memory Management**:
   - Since event handlers are attached to a single parent element rather than multiple child elements, there's less risk of memory leaks or performance issues caused by orphaned event handlers.

### Example of Event Delegation

Consider an example where you have a list of items (`<li>`) and you want to handle click events on each item:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Delegation Example</title>
</head>
<body>
  <ul id="itemList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    // Event delegation: Attach event listener to the parent <ul> element
    const itemList = document.getElementById('itemList');
    itemList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
        // Handle the click event on <li> elements
      }
    });
  </script>
</body>
</html>
```

### Explanation of the Example

- **Event Listener**: Instead of attaching an event listener to each `<li>` element, we attach it to the `<ul>` parent element (`itemList`).
- **Event Handling**: Inside the event handler, `event.target` refers to the actual element that triggered the event (in this case, the `<li>` element that was clicked).
- **Condition**: By checking `event.target.tagName === 'LI'`, we ensure that the click event is only handled when a `<li>` element is clicked, not any other child elements.

### Summary

Event delegation is a powerful technique in JavaScript for handling events efficiently, especially in applications where elements are dynamically added or where performance optimization is crucial. It simplifies event handling code, improves performance, and ensures that dynamically created elements respond to events without needing explicit event binding. Understanding and leveraging event delegation is key to writing scalable and maintainable JavaScript code for interactive web applications.