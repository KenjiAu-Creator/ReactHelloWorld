import React from 'react';
import HelloStudent from './HelloStudent';

function HelloStudents()
{
  // Some test values.
  const students = [ 
    {name: "Lindsey", unit: "Python"},
    {name: "Ayesha", unit: "CSS"},
    {name: "Krisztina", unit: "React"}
  ];

  let counter = 0;
  
  //Create a map. (versus an array.)
  const studentsList = students.map( 
    student => <HelloStudent key={counter++} name={student.name} unit={student.unit} />
  );
  
  console.log(studentsList);

  return (
    <section>
      <h2>Our Hello to Students</h2>
        { studentsList }
    </section>
  );
}

export default HelloStudents;