// function App() {
//   return (
//     <div>
//       <h1>Hello Ishu 🚀</h1>
//       <p>My first React app</p>
//     </div>
//   )
// }

// function ap(){
//   return(
//     <div>
//       <h2>Welcome to My App</h2>
//       <p>This is a simple React application.</p>
//     </div>
//   )
// }

// export default App
// export { ap }

import Student from './Student.jsx';

function App() {
  return (
    <div>
      <h1>Student Information</h1>
      <Student name="Ishu" course="CSE-12" marks={95} />
      <Student name="John" course="CSE-12" marks={88} />
      <Student name="Alice" course="CSE-12" marks={92} />
    </div>
  );
}

export default App;