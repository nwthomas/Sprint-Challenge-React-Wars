# Answers

1.  What is React JS and what problems does it try and solve?

React.js is a library (_not_ a framework) that allows you to build compact, reusable components out of your application or website. This not only allows for reusability and extensibility, but it makes for a cleaner development experience. Additionally, as DOM changes are quite expensive in terms of efficiency, React's virtual DOM reconciles the current real DOM against it and only updates the components that have changes since the last update. This is much more efficient as the entire page seldom needs to be refreshed every time a change is made. Finally, we also have other breakthroughs that React.js allows us to use such as using state to hold data and using it to make the previously-mentioned changes.

2.  What does it mean to _think_ in react?

Thinking in React, for me, means to think in terms of components and the flow of state throughout the application. Instead of being overwhelming, I find that this has the opposite effect... To quote Mel Gibson in _The Patriot_, "Aim small, miss small." By focusing on smaller components and how those puzzle pieces fit together, I think that React allows developers to develop an amazing, component-based (and extensible) application with less effort. Finally, state allows us as developers to intentional pass components the only data that it needs to do its job well; this keeps the "global scope," as it were, of that component relatively clean. At least, that's how I like to think _thinking in React_ works for my workflow.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A _Class/Stateful_ component is a class-based component that is capable of holding state, normal methods, and lifecycle methods. They are largely where we are concerned with the behavior of the application, and we will pass down data and methods _from_ these components to other types to be displayed. Class components are dynamic in nature and are where we modify state using .setState().

In contrast, _Functional/Presentational_ components are only concerned with displaying data based down on state using props. They are the meat and potatoes of the UI, and are typically what the user sees when they're actually interacting with the application. They are simple and easily modifiable due to the lack of complexity in their nature.

4.  Describe state.

State is the method in React.js in which we hold data. The reason that it is so special is that, in addition to being immutable except through the intentional use of .setState(), it also allows us to proactively modify the "state" of our application using the virtual DOM method I mentioned in question 1. By tracking (in state) which data has been modified, React is able to track which components (and only those components) need to be updated.

5.  Describe props.

Props is merely the data or methods hat you pass down from component to component. Data held on props could include a class name, a complete data set list, a method that handles text input, or anything else held in state. Props are read-only as state is only modifiable using .setState() as I mentioned in question 4.
