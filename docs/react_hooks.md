React Hooks are functions that enable you to "hook into" React's state and lifecycle features from function components.
They were introduced in React 16.8 as a way to use state, side effects, context, and other React features without
needing to write class components.

## Core Concept

Before hooks, you needed class components to manage state or handle lifecycle events. Hooks allow you to do all of this
in function components, making your code more concise and easier to understand.

## Essential React Hooks

### **useState** - Managing State

```tsx
const [count, setCount] = useState(0);
```

This is the most fundamental hook. It adds state to functional components:

- **Returns an array** with the current state value and a setter function
- **Triggers re-renders** when the state changes
- Can initialize with any data type (numbers, strings, objects, arrays)
- For expensive initial state calculations, pass a function: `useState(() => expensiveComputation())`

### **useEffect** - Handling Side Effects

```tsx
useEffect(() => {
  console.log("Component mounted or updated");

  return () => {
    console.log("Cleanup function");
  };
}, [count]); // Dependency array
```

This hook handles side effects like data fetching, subscriptions, or manual DOM manipulation:

- **No dependency array**: Runs after every render
- **Empty array `[]`**: Runs only on mount and unmount
- **With dependencies `[dep1, dep2]`**: Runs when dependencies change
- **Cleanup function**: Optional return function for cleanup (canceling timers, unsubscribing)

### **useContext** - Consuming Context

```tsx
const user = useContext(UserContext);
```

Allows you to consume React context directly without wrapping components:

- **Eliminates prop drilling** by accessing global state
- Cleaner than using `Context.Consumer`
- Automatically subscribes to context changes

### **useReducer** - Complex State Management

```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

For more complex state logic than `useState` can handle:

- **Similar to Redux pattern** with actions and reducers
- Better for state with multiple sub-values
- Better when next state depends on previous state

```tsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

### **useRef** - Direct DOM Access & Mutable Values

```tsx
const inputRef = useRef(null);
```

Two main purposes:

1. **DOM access**: Get direct reference to DOM elements
2. **Mutable values**: Store values that don't trigger re-renders when changed

```tsx
// Focus an input
useEffect(() => {
  inputRef.current?.focus();
}, []);
```

### **useMemo** - Memoizing Expensive Computations

```tsx
const expensiveValue = useMemo(() => computeExpensiveValue(num), [num]);
```

Optimizes performance by memoizing expensive calculations:

- **Only recalculates** when dependencies change
- Helps prevent unnecessary computations on every render
- Use sparingly - only for genuinely expensive operations

### **useCallback** - Memoizing Functions

```tsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

Returns a memoized version of a callback function:

- **Prevents unnecessary re-renders** of child components
- Useful when passing functions as props
- Only creates new function when dependencies change

## Advanced Hooks

### **useLayoutEffect**

Similar to `useEffect` but fires synchronously after all DOM mutations, before the browser paints. Use for measuring
layout or synchronizing scroll positions.

### **useImperativeHandle**

Used with `forwardRef` to customize the instance value exposed when using refs. Mostly for library authors.

## Custom Hooks

You can create your own hooks to encapsulate reusable logic:

```tsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

// Usage
const { count, increment, decrement } = useCounter(10);
```

Custom hooks must:

- Start with "use" (naming convention)
- Can call other hooks
- Allow logic reuse across components

## Best Practices

1. **Always call hooks at the top level** - never inside loops, conditions, or nested functions
2. **Use the dependency array correctly** in `useEffect` to avoid infinite loops
3. **Keep effects focused** - separate concerns into different `useEffect` calls
4. **Use `useCallback` and `useMemo` sparingly** - only when you have performance issues
5. **Create custom hooks** for reusable stateful logic

## Benefits Over Class Components

- **Less boilerplate** code
- **Better code reuse** with custom hooks
- **Easier testing** of isolated logic
- **Better tree-shaking** and bundling
- **More predictable** behavior

Hooks revolutionized React development by making functional components as powerful as class components while being more
intuitive and reusable.

---

## 🧠 1. **useState** — *State in Functional Components*

### 🔹 Concept Diagram

```
         [value, setValue] = useState(initial)

                 ↓ user clicks
            ┌──────────────┐ 
            │  setValue()  │
            └──────┬───────┘
                   ↓
        triggers re-render with new state
```

### 🔹 Code Example

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

## 🔁 2. **useEffect** — *Side Effects*

### 🔹 Diagram

```
Component Rendered
        ↓
 useEffect(callback, [deps])
        ↓
     Side Effect Runs
        ↓
Optional Cleanup Function
```

### 🔹 Code Example

```tsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(timerId);
  }, []); // Run once
}
```

---

## 🌍 3. **useContext** — *Access Shared Data*

### 🔹 Diagram

```
<App>
 ├─ <MyProvider value="theme: dark">
 │     └── <ComponentA>
 │           └── useContext(MyContext) --> "theme: dark"
```

### 🔹 Code Example

```tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function Component() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Component />
    </ThemeContext.Provider>
  );
}
```

---

## ⚙️ 4. **useReducer** — *Complex State Logic*

### 🔹 Diagram

```
     dispatch({ type: 'increment' })
              ↓
     reducer(currentState, action)
              ↓
        newState returned
              ↓
      Component Re-renders
```

### 🔹 Code Example

```tsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
    </>
  );
}
```

---

## 🪝 5. **Custom Hook** — *Reuse Logic*

### 🔹 Diagram

```
       useCounter()
          ↓
   ┌─────────────────────────┐
   │ uses useState internally│
   └─────────────────────────┘
          ↓
   returns { count, increment }
```

### 🔹 Code Example

```tsx
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return { count, increment };
}

function Counter() {
  const { count, increment } = useCounter();
  return <button onClick={increment}>Clicked {count} times</button>;
}
```

---

## ⏱️ 6. **useMemo vs useCallback**

### 🔹 useMemo

Caches a **value**:

```tsx
const result = useMemo(() => computeExpensiveValue(a), [a]);
```

### 🔹 useCallback

Caches a **function**:

```tsx
const handleClick = useCallback(() => doSomething(a), [a]);
```

---

Absolutely! Let's break down `useContext` and `createContext` — two React APIs that work together to provide a way to *
*share data (context) across a component tree** without passing props manually at every level (known as **prop drilling
**).

---

## 🔧 `createContext` – Creating the Shared Context

### 🧠 What is it?

* `createContext` creates a **Context object**.
* This object includes:

    * A **Provider** component to supply data.
    * A **Consumer** (or `useContext` hook) to access that data.

---

### 🔹 Syntax

```tsx
import { createContext } from 'react';

export const ThemeContext = createContext("light"); // Default value
```

Now `ThemeContext` can be shared between components.

---

## 🔌 `useContext` – Accessing the Shared Context

### 🧠 What is it?

* `useContext` is a **hook** that lets you access the context value inside any **function component**.
* It subscribes to the context and re-renders the component if the context value changes.

---

### 🔹 Syntax

```tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const theme = useContext(ThemeContext);
```

Now `theme` contains the current context value.

---

## 🔄 Full Example

### ✅ Step 1: Create a context

```tsx
// ThemeContext.ts
import { createContext } from 'react';

export const ThemeContext = createContext("light");
```

---

### ✅ Step 2: Create a provider

```tsx
// App.tsx
import { ThemeContext } from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

---

### ✅ Step 3: Use context in a nested component

```tsx
// Toolbar.tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Toolbar() {
  const theme = useContext(ThemeContext);

  return <div>The theme is: {theme}</div>;
}
```

---

## 🧩 Why Use Context?

Without context:

```tsx
<App theme="dark">
  <Header theme="dark">
    <Navbar theme="dark" />
  </Header>
</App>
```

With context:

```tsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

And inside any child:

```tsx
const theme = useContext(ThemeContext);
```

---

## ✅ Best Practices

* Use context for **global data**: themes, user info, language, etc.
* Avoid putting frequently updated state in context (performance).
* Use `useContext` only **inside a `Provider`**, or the default value will be returned.

---
