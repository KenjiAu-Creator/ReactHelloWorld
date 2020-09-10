import React from 'react';

// We can try a fat arrow function as well (lets try to be consistent in the real world though!)
// If the component accepts a parameter, this is referred to as a "prop/property"
// Props allow us to pass values into our components from parent document / component.

// Props is just the term that React uses to accept parameters. The name is arbitrary you can set
// We can pass in the "props" name and unit which the function will then use.
const HelloStudent = props => {
  return (
    <p>
      Hello &nbsp;
      { props.name },
      welcome to TECHCareers and its React unit!
      Their favourite unit is: &nbsp;
      { props.unit }
    </p>
  );
};

export default HelloStudent;