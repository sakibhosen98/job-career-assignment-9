import React from 'react';

const Blog = () => {
  return (
    <div>
        <h3>1. When Should you use context API?</h3>
        <p><span className='fw-bold'>Answer: </span>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
        <h3>2. What is constom hook?</h3>
        <p><span className='fw-bold'>Answer: </span>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
        <h3>3. What is useReff?</h3>
        <p><span>Answer: </span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        <h3>4.What is useMemo? </h3>
        <p><span>Answer: </span>useMemo is a React Hook that is used for memoization. Memoization is an optimization technique used to speed up calculations by caching the results of expensive functions or computations so that they don't have to be re-executed every time they are needed.

In React, useMemo is used to memoize the result of a function so that it doesn't have to be re-computed every time a component re-renders. The useMemo hook takes two arguments: a function to be memoized and an array of dependencies. The function passed as the first argument will only be executed if any of the dependencies in the second argument have changed since the last render. Otherwise, the cached result from the previous execution of the function is returned.</p>
    </div>
  );
};

export default Blog;