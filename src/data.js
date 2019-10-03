const prototypeData = [{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 2,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 4,
  "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "accessor method"
}, {
  "id": 5,
  "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "iteration method"
}, {
  "id": 6,
  "question": "What is an example of a mutator method?",
  "answers": ["sort()", "map()", "join()"],
  "correctAnswer": "sort()"
}, {
  "id": 7,
  "question": "Which array prototype is not an accessor method?",
  "answers": ["join()", "slice()", "splice()"],
  "correctAnswer": "splice()"
}, {
  "id": 8,
  "question": "What do iterator methods take in as their first argument?",
  "answers": ["callback function", "current element", "an array"],
  "correctAnswer": "callback function"
}, {
  "id": 9,
  "question": "What does the callback function for find() return?",
  "answers": ["boolean", "array", "object"],
  "correctAnswer": "boolean"
}, {
  "id": 10,
  "question": "Which iteration method returns the first array element where the callback function returns true",
  "answers": ["find()", "filter()", "forEach()"],
  "correctAnswer": "find()"
}, {
  "id": 11,
  "question": "Which iteration method returns a new array with all elements that match a given condition?",
  "answers": ["filter()", "find()", "map()"],
  "correctAnswer": "filter()"
}, {
  "id": 12,
  "question": "Which iteration method returns an array of the same length as the original array?",
  "answers": ["map()", "forEach()", "reduce()"],
  "correctAnswer": "map()"
}, {
  "id": 13,
  "question": "The callback function for map() returns a modified version of the current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 14,
  "question": "Which iteration method can turn an array into a single value of any data type?",
  "answers": ["reduce()", "map()", "filter()"],
  "correctAnswer": "reduce()"
}, {
  "id": 15,
  "question": "The callback function for reduce() takes in an accumulator and a current element.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 16,
  "question": "What does the callback function for reduce() return?",
  "answers": ["the accumulator", "the current element", "the initializer"],
  "correctAnswer": "the accumulator"
}, {
  "id": 17,
  "question": "What does the reduce() method take in?",
  "answers": ["callback function and initializer", "callback function and current element", "callback function and accumulator"],
  "correctAnswer": "callback function and initializer"
}, {
  "id": 18,
  "question": "What does the callback function for the map() method take in?",
  "answers": ["current element", "initializer", "boolean"],
  "correctAnswer": "current element"
}, {
  "id": 19,
  "question": "What does the callback function for filter() return?",
  "answers": ["boolean", "an array of the same length", "a single value of any data type"],
  "correctAnswer": "boolean"
}, {
  "id": 20,
  "question": "forEach() returns an array",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 21,
  "question": "Which iteration method is best for DOM manipulation?",
  "answers": ["forEach()", "map()", "reduce()"],
  "correctAnswer": "forEach()"
}, {
  "id": 22,
  "question": "Which prototype method is used to iterate over each property of an object?",
  "answers": ["Object.keys()", "Object.values()", "reduce()"],
  "correctAnswer": "Object.keys()"
}, {
  "id": 23,
  "question": "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?",
  "answers": ["Object.assign()", "Object.keys()", "filter()"],
  "correctAnswer": "Object.assign()"
}, {
  "id": 24,
  "question": "Object.assign() can take in an indefinite amount of arguments",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 25,
  "question": "Arrays are specialized objects where the keys are ordered numbers.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 26,
  "question": "shift(), unshift(), pop(), and push() are examples of what type of array property method?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 27,
  "question": "Accessor methods permanently modify the original array, mutator methods do not.",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 28,
  "question": "Which prototype method returns an array of an object's property values?",
  "answers": ["Object.keys()", "Object.values()", "Object.assign()"],
  "correctAnswer": "Object.keys()"
}, {
  "id": 29,
  "question": "map() takes in two optional arguments: the index of the current element, and the array that map was called upon",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 30,
  "question": "What type of methods are functions that allow you to manipulate the value of a particular data type or class?",
  "answers": ["prototype method", "object", "callback function"],
  "correctAnswer": "prototype method"
}]

const prototypeData2 = [{
  "id": 1,
  "question": "What allows you to style a page using property/value pairs",
  "answers": ["CSS", "HMTL", "Javascript"],
  "correctAnswer": "CSS"
}, {
  "id": 2,
  "question": "What is used to target something on the DOM in order to style it?",
  "answers": ["targeter", "selector", "querySelector"],
  "correctAnswer": "selector"
}, {
  "id": 3,
  "question": "What CSS property would I use to change the background color of an element?",
  "answers": ["color-background", "change-background", "background-color"],
  "correctAnswer": "background-color"
}, {
  "id": 4,
  "question": "Which is an example of a CSS property?",
  "answers": ["document.querySelector()", "color", "blue"],
  "correctAnswer": "color"
}, {
  "id": 5,
  "question": "Which is an example of a CSS value?",
  "answers": ["border", "background", "1px"],
  "correctAnswer": "1px"
}, {
  "id": 6,
  "question": "Which example would create a border that is blue, 1px and solid",
  "answers": ["border: 1px solid blue", "border: blue solid 1px", "border: blue 1px solid"],
  "correctAnswer": "border: 1px solid blue"
}, {
  "id": 7,
  "question": "what is a CSS layout tool that uses columns and rows?",
  "answers": ["float", "grid", "flex"],
  "correctAnswer": "grid"
}, {
  "id": 8,
  "question": "what value of the property position removes the element from the normal flow and pulls it forward to be positioned on page?",
  "answers": ["relative", "absolute", "fixed"],
  "correctAnswer": "absolute"
}, {
  "id": 9,
  "question": "What is the correct syntax for changes the color of text to blue?",
  "answers": ["changeColor('blue')", "color: blue", "changeColor: blue"],
  "correctAnswer": "color: blue"
}, {
  "id": 10,
  "question": "What do you call a property value pair within a CSS rule?",
  "answers": ["declaration", "property: value", "assignment"],
  "correctAnswer": "declaration"
}, {
  "id": 11,
  "question": "In regards to the box model - what comes just outside of padding?",
  "answers": ["content", "margin", "border"],
  "correctAnswer": "border"
}, {
  "id": 12,
  "question": "Block elements as a default take up the entire width of the page",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 13,
  "question": "In regards to the box model - what comes just outside of content?",
  "answers": ["padding", "margin", "border"],
  "correctAnswer": "padding"
}, {
  "id": 14,
  "question": "<p> defaults as an inline element",
  "answers": ["true", "false"],
  "correctAnswer": "false"
}, {
  "id": 15,
  "question": "What does the browser use to determine which CSS values are relevant and should or shouldn't be used?",
  "answers": ["selector", "specificity", "relevance"],
  "correctAnswer": "specificity"
}, {
  "id": 16,
  "question": "Which example would give an element a 10px margin on the top and bottom?",
  "answers": ["margin: 10px 0", "margin-top-bottom: 10px", "margin: 0 10px 0 10px"],
  "correctAnswer": "margin: 10px 0"
}, {
  "id": 17,
  "question": "What do you use to configure the actual appearance of an animation?",
  "answers": ["keyFrames", "@keyframes", "@key-frames"],
  "correctAnswer": "@keyframes"
}, {
  "id": 18,
  "question": "What do you use to initiate a media query?",
  "answers": ["@media", "@query", "@mediaquery"],
  "correctAnswer": "@media"
}, {
  "id": 19,
  "question": "Which value of the property display works primarily with two axis?",
  "answers": ["float", "grid", "flex"],
  "correctAnswer": "flex"
}, {
  "id": 20,
  "question": "font-size: 125%; will increase the size of the selected text",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 21,
  "question": "What would be a good way to center an element using margin?",
  "answers": ["margin: 0 auto 0 0;", "margin: auto", "center: margin"],
  "correctAnswer": "margin: auto"
}, {
  "id": 22,
  "question": "What attribute on HTML elements should primarily be used for CSS?",
  "answers": ["id", "class", "data-id"],
  "correctAnswer": "class"
}, {
  "id": 23,
  "question": "which will properly make the text of a paragraph red?",
  "answers": [".p {textcolor: red;}", "p {color: red;}", "par {color: red;}"],
  "correctAnswer": "p {color: red;}"
}, {
  "id": 24,
  "question": "What changes the size of something based on the properties initial value?",
  "answers": ["rem", "px", "%"],
  "correctAnswer": "rem"
}, {
  "id": 25,
  "question": "You can use the dev tools to edit the CSS and see the results in real time.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}, {
  "id": 26,
  "question": "what selector is used to target the whole page?",
  "answers": ["#", "~", "*"],
  "correctAnswer": "*"
}, {
  "id": 27,
  "question": "What does CSS stand for?",
  "answers": ["Complete Sheet Styling", "Capture Selector Styles", "Cascading Style Sheets"],
  "correctAnswer": "Cascading Style Sheets"
}, {
  "id": 28,
  "question": "what CSS property/value pair should be used to center text?",
  "answers": ["text: center", "text-align: center", "text-position: center"],
  "correctAnswer": "text-align: center"
}, {
  "id": 29,
  "question": "border-radius: 10px; would round the corners of a square box by 10px.",
  "answers": ["true", "false"],
  "correctAnswer": "true"
}]

module.exports = {
  prototypeData,
  prototypeData2
}
