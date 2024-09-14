1. useState

“The useState hook is used to manage state in a functional component. It returns an array with two elements: the current state value and a function to update that value. The initial state is set when you call useState with a default value. Each time you call the state updater function, React triggers a re-render of the component to reflect the new state.”


2. useEffect

“The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. By default, it runs after every render. However, you can control its execution by passing a dependency array. If you pass an empty array, it behaves like componentDidMount and runs only once. If you provide dependencies, the effect runs whenever those dependencies change.”


3. useContext

“The useContext hook is used to access the value of a context in a functional component. It allows you to consume context without needing to use a Context Consumer. By calling useContext with a context object, you get the current context value, which can be useful for passing data through the component tree without prop drilling.”


4. useCallback

“The useCallback hook returns a memoized version of a callback function that only changes if one of its dependencies changes. This is particularly useful for optimizing performance in scenarios where passing functions as props can cause unnecessary re-renders of child components. By memoizing the function, you prevent it from being recreated on every render.”


5. useMemo

“The useMemo hook returns a memoized value of a computation, which is recalculated only when one of its dependencies changes. It helps optimize performance by avoiding expensive calculations on every render. By passing a dependency array, you ensure that the memoized value is recalculated only when necessary.”


6. useRef

“The useRef hook provides a way to persist values across renders without causing re-renders. It is commonly used to access and interact with DOM elements directly, or to store mutable values that don’t affect the component’s rendering. The useRef hook returns a mutable ref object whose .current property can be used to hold the desired value.”


7. custom Hooks

"Custom hooks in React allow you to extract and reuse logic that would otherwise be duplicated across multiple components. They are simply JavaScript functions that start with the prefix use and can call other hooks like useState, useEffect, useContext, etc. By abstracting common functionality into a custom hook, you can make your code cleaner, more modular, and easier to maintain."