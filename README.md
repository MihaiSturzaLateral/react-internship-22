# Welcome to Lateral React Internship 2022!
> React is a declarative, efficient, and flexible JavaScript library

Used for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

React Javascript library is growing its base among the developer’s community. So far, thousands of websites have been built using React’s dynamic features of providing better features, great work experience, and better web application development.

## **Week 1**

> The topics this week are based mainly on the introduction to the basics of web
>  development with the focus on **Javascript** programming language.

 ### **Basic concepts for HTML5 & CSS3**
 &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
 &nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=vQWlgd7hV4A)
 
 What is HTML?
[HTML](https://www.w3.org/html/)  is the language for describing the structure of Web pages. HTML gives authors the means to:
-   Publish online documents with headings, text, tables, lists, photos, etc.
-   Retrieve online information via hypertext links, at the click of a button.
-   Design forms for conducting transactions with remote services, for use in searching for information, making reservations, ordering products, etc.
-   Include spread-sheets, video clips, sound clips, and other applications directly in their documents.

With HTML, authors describe the structure of pages using  _markup._  The  _elements_  of the language label pieces of content such as “paragraph,” “list,” “table,” and so on.

What is CSS?
[CSS](https://www.w3.org/Style/CSS/)  is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language. The separation of HTML from CSS makes it easier to maintain sites, share style sheets across pages, and tailor pages to different environments. This is referred to as the  _separation of structure (or: content) from the presentation._

  ###  **What is JavaScript**
&nbsp; &nbsp; &nbsp;&nbsp; ***Resources:***
 &nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=W6NZfCO5SIk)
 &nbsp; &nbsp; -  JavaScript intro: [link](https://javascript.info/intro)
 
**JavaScript** is a lightweight, interpreted **programming** language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. **JavaScript** is very easy to implement because it is integrated with HTML. It is open and cross-platform.

 ###   **Setting Up the Development Environment**
 &nbsp; &nbsp; &nbsp;&nbsp;***Resources:***
&nbsp; &nbsp; - tutorial: [link](https://edabit.com/tutorial/javascript)

 ### **JavaScript in Browsers**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp;- Mozilla: [link](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

 ###  **Separation of Concerns JavaScript in Node** 
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=PFmuCDHHpwk)

The  [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)  (SoC) is one of the most fundamental principles in software development.
It is so crucial that 2 out of 5 SOLID principles (Single Responsibility and Interface Segregation) are direct derivations from this concept
The principle is simple: don’t write your program as one solid block, instead, break up the code into chunks that are finalized tiny pieces of the system each able to complete a simple distinct job.
 ###  **Variables**
 ###   **Constants**
 ###   **Primitive Types**
 ###  **Dynamic Typing**
 ###   **Objects**
 ###  **Arrays**
 ###  **Functions**
 ###   **Types of Functions**
 ###   **Classes**
 
 ###   **Understanding Async Programming (Promises, Async, Await, Fetch, Then)** 
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=lI1ae4REbFM)
&nbsp; &nbsp; - text tutorial: [link](https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/)

*JavaScript is always synchronous and single-threaded.*  If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls. The Ajax call will stop executing and other code will be able to execute until the call returns (successfully or otherwise), at which point the callback will run synchronously. No other code will be running at this point. It won't interrupt any other code that's currently running.

JavaScript timers operate with this same kind of callback.

Describing JavaScript as asynchronous is perhaps misleading. It's more accurate to say that JavaScript is synchronous and single-threaded with various callback mechanisms.
 ###   **Working with GitHub Commands**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - tutorial: [link](https://github.com/joshnh/Git-Commands)

Git is a distributed, open-source version control system. It enables developers and data scientists to track code, merge changes and revert to older versions [-AWS](https://aws.amazon.com/devops/source-control/git/). It allows you to sync changes with a remote server. Due to its flexibility and popularity, Git has become an industry standard as it supports almost all development environments, command-line tools, and operating systems.

## Week 2

> Essential JavaScript methods used in working with arrays and strings,
> and a short recap of an asynchronous and synchronous programming

&nbsp;
 ###  **What is Recursion?**
 &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=6oDQaB2one8)
&nbsp; &nbsp; - written material: [link](https://www.programiz.com/javascript/recursion)

A recursive function is a  [function](https://www.javascripttutorial.net/javascript-function/)  that calls itself until it doesn’t. And this technique is called recursion.
Suppose that you have a function called  `recurse()`. The  `recurse()`  is a recursive function if it calls itself inside its body, like this:

  ```jsx 
   function recurse() {
    	    // ...
    	    recurse();
    	    // ...
 } 
```
    
**A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely

 ###  **Spread operator**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=pYI-UuZVtHI)
&nbsp; &nbsp; - written material: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
&nbsp; &nbsp; - written material #2: [link](https://www.notion.so/The-Spread-Operator-b7608512fbd844ec9f27f31740fb7298)

Spread syntax (`...`) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

 ###  **Destructuring**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
&nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=NIq3qLaHCIs)

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Also please go over the following important stuff:
 - **Map function**
 - **Reduce function**
 -  **Filter function**
 -  **Concat function**
 -  **Slice function**
 - **Splice function**
 - **Join function**
 -  **Split function**
 -  **ToString function**
 -  **ToLowerCase function**
 - **ToUpperCase function**
 -  **CharAt function**
 -  **IndexOf function**
 -  **Replace function**
 - **List item**
 -  **Find function**
 -  **FindLast function**
 -  **Object entries**
 -  **Array entries**
 -  **Promises / async-await**
 -  **Promises.all()**
 -  **JavaScript Returning Functions from Functions**
  
### Week's practice exercise:
*(please create a branch with your name and commit there all your solutions)*

	  1.  Create an array with ages (numbers) and sort the array.
        Find the min and the max age.(Print them to the console)
    
	  2.  Create an array with countries and find the countries that
        contain only 5 characters. (Print them to the console) Spain, China, India, Japan…
        
	  3. Transform elements from that array to be the  upper case using for,
       do while and while loop. (Print them to the console) You can try also with map() function.
       
	  4.  Implement a function that takes a mark as a parameter and returns true if the mark
	   is greater than 4, returns false if the mark is less than 5, and returns nothing if
	   the mark is invalid - also with an appropriate message.
	   Implement this as an expression function, arrow function, and declaration function.
	   
	  5. Implement an example of a callback function.
	  
	  6. Extract all the countries containing two or more words from the countries array
	   and print it as array. Here is the array with countries 
	   - https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js
	   
	  7. Create an Animal class that has color, name, legs as parameters.
	   Create different methods for these - constructors, getters, setters.
	   
	  8. Define a Dog class that extends the Animal class with a constructor
	  (use the specific function to access all the properties from the parent class)
	  breed, color, name, legs as parameters. Also to have setBreed(), setColor(),
	  setName(), setLegs() methods- that set the breed, color, name and legs for dog with
	  getBreed(), getColor(), getName(), getLegs() methods that return the breed, the color,
	  name and the legs for each dog. Create an instance of the Dog class and play around
	  with the setters and getters.(Print them to the console)
	  
	  9. Use this API link
	 https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k
	 to fetch data (only images) and display (insert) them into a div with
	 document.createElement('img’). The src for the img should be “…urls.thumb”
	 from the results array in the API. Call this API using a button, and add an
	 event listener for it. You can play around with creating also a menu bar, footer,
	 and some cool content to display the images. As you know, an API request returns
	 a promise (with fetch) - you should also implement this request using the async await concept.

## **Week 3**

> This week we dive into the React library, learning the **basic 
> concepts** on how it is and how it works  


 ### **React JS - React Tutorial for Beginners**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video tutorial: [Youtube link](https://www.youtube.com/watch?v=Ke90Tje7VS0)

React is a JavaScript library for building user interfaces.
React is used to build single-page applications.
React allows us to create reusable UI components.
&nbsp;

  ### **React Tutorial**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://www.w3schools.com/REACT/DEFAULT.ASP)
&nbsp;

 ### **Hello World**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/hello-world.html)
&nbsp;

 ###  **Introducing JSX**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/introducing-jsx.html)

JSX stands for JavaScript XML. It allows us to write HTML in React.
JSX makes it easier to write and add HTML in React and also allows us to write HTML elements in JavaScript and place them in the DOM without any  `createElement()` and/or  `appendChild()`  methods.
It converts HTML tags into react elements.

 ### **Rendering Elements**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/rendering-elements.html)

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element, first pass the DOM element to  [`ReactDOM.createRoot()`](https://reactjs.org/docs/react-dom-client.html#createroot), then pass the React element to  `root.render()`
React elements are [immutable](https://en.wikipedia.org/wiki/Immutable_object). Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.


 ### **Components and Props**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/components-and-props.html)

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components come in two types, Class components, and Function components, in this tutorial we will concentrate on Function components.

>  Class Component

A class component must include the  `extends React.Component`  statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a  `render()`  method, this method returns HTML.

The huge benefit of components is their ability to be reused across our apps, wherever we need them.
Data passed to components in JavaScript are called props.
Props look identical to attributes on plain JSX/HTML elements, but you can access their values within the component itself.
Props are available in parameters of the component to which they are passed. Props are always included as properties.

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```
> Function Component

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.
```jsx
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

 ### **State and Lifecycle**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/state-and-lifecycle.html)

Each component in React has a lifecycle that you can monitor and manipulate during its three main phases.
The three phases are: Mounting,  Updating, and  Unmounting.

![Component Lifecycle in React - DEV Community](https://res.cloudinary.com/practicaldev/image/fetch/s--mHJHxj7G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z9udv52nm78jt2svdubv.jpg)


 ### **Handling Events**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/handling-events.html)

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
-   React events are named using camelCase, rather than lowercase.
-    With JSX you pass a function as the event handler, rather than a string.

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

 ### **Conditional Rendering**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/conditional-rendering.html)

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like [`if`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or the [conditional operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to create elements representing the current state, and let React update the UI to match them.

```jsx

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
	 const isLoggedIn = props.isLoggedIn;
	 if (isLoggedIn) { 
	     return <UserGreeting />;
     }
	  return <GuestGreeting />;
  }
```

 ### **State**
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11)

Each component has a built-in  `state`  object. The  `state`  object is where you store property values that belong to the component.

When the  `state`  object changes, the component re-renders.
```jsx
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
        <p>My cars brand: {this.state.brand}</p>
      </div>
    );
  }
}
```
 ### setState
 &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11)

State can be updated in response to event handlers, server responses, or prop changes. This is done using the **setState()** method. The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.

Always use the [setState() method](https://css-tricks.com/understanding-react-setstate/ "setState() method") to change the state object, since it will ensure that the component knows it’s been updated and calls the render() method.

 ### Destructuring props and state
  &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=5_PdMS9CLLI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=12 )
&nbsp; &nbsp; - written material: [link](https://www.geeksforgeeks.org/destructuring-of-props-in-reactjs/#:~:text=In%20destructuring%2C%20It%20does%20not,makes%20the%20code%20more%20clear. )

Destructuring was introduced in ES6. It’s a JavaScript feature that allows us to extract multiple pieces of data from an array or object and assign them to their own variables

 ### useState Hook
   &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=lAW1Jmmr9hc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=45  )
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/hooks-state.html )

What is a Hook? A Hook is a special function that lets you “hook into” React features.
For example, `useState` is a Hook that lets you add React state to function components.

 ### useState with previous state
 &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=d0plTCQgsXs&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=46)  

 ### useState with object
  &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=-3lL8oyev9w&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=47)

 ### useState with array
   &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=RZ5wKYbOM_I&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=48)

 ### useEffect Hook
  &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=0ZJgIjIuY7U)
&nbsp; &nbsp; - written material: [link](https://reactjs.org/docs/hooks-effect.html )

The  `useEffect`  Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
`useEffect`  accepts two arguments. The second argument is optional. 
`useEffect(<function>, <dependency>)`
```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
```
 **No dependency passed:**
 ```jsx
useEffect(() => {
  //Runs on every render
});
```
**An empty array:**
```jsx
useEffect(() => {
  //Runs only on the first render
}, []);
```
 **Props or state values:**
 ```jsx
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

**Effect Cleanup**

Some effects require cleanup to reduce memory leaks.
Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
We do this by including a return function at the end of the  `useEffect`  Hook.
```jsx
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}
```

 ### useRef Hook
   &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=t2ypzz6gJm0&t=288s)
&nbsp; &nbsp; - written material: [link](https://www.w3schools.com/react/react_useref.asp)
 
 ### useContext Hook
  &nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; - video material: [Youtube link](https://www.youtube.com/watch?v=5LrDIWkK_Bc)
&nbsp; &nbsp; - written material: [link](https://medium.com/technofunnel/usecontext-in-react-hooks-aa9a60b8a461#:~:text=“useContext”%20hook%20is%20used%20to,components%20without%20involving%20“props”.)
&nbsp; &nbsp; - written material #2: [link](https://reactjs.org/docs/context.html)

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

### Week's practice exercise:
*(please create a branch with your name and commit there all your solutions)*

	  1.  Create a React application that has one input, two buttons and a component called 
	  "LabelValue" that receives two props: "label"- string and "value" - number, that
	  displays the label and the value passed to it. One of the buttons, when clicked,
	  increments the value, the other decreases it by 1. 
	   
![Design sugestion](https://i.ibb.co/k8PdB1g/Opera-Snapshot-2022-08-07-182043-localhost.png =300x )	 
     
     2. Create a <Header/> component with 2-3 links to other pages using React Router.
      (Home Page, Photos Page, Comments Page)
     
     Make use of - BrowserRouter, Route, Link from react-router-dom
     On Photos Page - using this resource https://jsonplaceholder.typicode.com/photos 
     make a reusable component which can be like a <Card/> where you add/fetch/display 
     dynamically the id, photo, title.
     
     Use the useEffect hook for making the API request,map function to map through posts and 
     display them in a creative way.Do the same for
     Comments Page - with this API https://jsonplaceholder.typicode.com/comments 
     Extra: on the first page laod the APOD picture suing NASA's API: 
https://api.nasa.gov 
   (https://api.nasa.gov/#:~:text=APOD:%20Astronomy-,Picture,-of%20the%20Day)
     Help:
     - https://www.w3schools.com/react/react_router.asp 
     -  https://www.youtube.com/watch?v=bYFYF2GnMy8&list=LL&index=1 
   
![enter image description here](https://i.ibb.co/RSfHtfR/Screenshot-2022-08-07-at-18-30-11.png =500x)


## Week 4

> Continue to learn more concepts and solidify important ones 
> in React framework

### JSX (2)
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -written material: [link](https://www.freecodecamp.org/news/jsx-in-react-introduction/)

###  State (2)
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -written material: [link](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/)

###  Props (2)
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -written material: [link](https://www.freecodecamp.org/news/how-to-use-props-in-react/)

###  Life cycle (2)
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -video material: [Youtube link](https://www.youtube.com/watch?v=m_mtV4YaI8c)

###  Mastering React's useEffect - OPTIONAL
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -video material: [Youtube link](https://www.youtube.com/watch?v=dH6i3GurZW8)

###  Learn the React useEffect Hook in 24 minutes (for beginners)
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -video material: [Youtube link](https://www.youtube.com/watch?v=UVhIMwHDS7k&t=2s)

###  API calls with Axios
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -written material: [link](https://www.youtube.com/watch?v=UVhIMwHDS7k&t=2s)

###   DOM / virtual DOM
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -written material: [link](https://programmingwithmosh.com/react/react-virtual-dom-explained/)

###  React Router (2)
&nbsp; &nbsp; &nbsp; &nbsp;***Resources:***
&nbsp; &nbsp; -written material: [link](https://www.freecodecamp.org/news/learn-react-router/)


