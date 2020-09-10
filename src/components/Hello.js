import React from 'react';

// There are two ways to make a component... class and function.
// Lets give 'function' a shot!
function Hello() {
  // Every component should return JSX
  return (
    <h1>
      Hello, World!
    </h1>
  );
}

// This allows us to import the file into other files.
// Just like how in the above we have
// import React from 'react'
// We would use:
// import Hello from 'Hello'
export default Hello;