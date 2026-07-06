//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Demetrius Edwards';
  const age = 34;
  const hobbies = ['Reading', 'Traveling', 'Gaming', 'Coding'];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>
        My name is {name} and I am {age} years old.
      </p>
      <p>My hobbies include:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
