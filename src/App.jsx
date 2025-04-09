
// state , components 
import React, { useState } from "react";
import { HeaderComp } from "./components/HeaderComp";
import { HeaderBtn } from "./components/HeaderBtn";
import { AddTodo } from "./components/AddTodo";
import { CardWrapper } from "./components/CardWrapper";
import { CleanCardWrapper } from "./components/CleanCardWrapper";

// jsx - javascript xml;
// function onClickHandler() {
//   state.count += 1;
//   console.log(state.count);
// }


// I know you will uncomment this and try 2 read this code !! Gunjan 

// function App() {

//   const [count, setCount] = useState(0);
//   // implementing the todos application here 
//   const [todos, setTodos] = useState([{
//     title: "Go to gym",
//     description: "Go to gym sharp 7am to 9am",
//     completed: false
//   },
//   {
//     title: "Practise DSA",
//     description: "Sharp it and make it your inbuilt thing",
//     completed: true
//   }]);


//   function addTodo() {
//     // ... is the spread operator 
//     setTodos([...todos , {
//       title: "new Todo",
//       description: "This is recently added!!"
//     }]);
//   }





//   return (
//     <>
//       <p>Hi There</p>
//       {/* <button onClick={onClickHandler2}>Count is {count}</button> */}
//       <CustomBtn count={count} setCount={setCount} />

//       <button onClick={addTodo}>Add random ToDo</button>
//       {
//         todos.map((todo) => (
//           <Todo title={todo.title} description={todo.description} />
//         ))
//       }
//     </>
//   )
// }

// here using the most used approach i.e




function App() {

  // const [title, setTitle] = useState('my name is Gunjan');

  // function titleChange() {
  //   setTitle("my name is " + Math.random());
  // }


  return (
    <>
      {/* <p>this is the new one</p> */}
      {/* <HeaderBtn /> */}
      {/* <button onClick={titleChange}>Click me to change the title</button> */}
      {/* <Header title={title} /> */}
      {/* <HeaderComp title="Heyy Baby 2 !!" /> */}
      <CleanCardWrapper>
        <p>Hi There</p>
        <h3>Gunjan Indurkar Full Stack Developer</h3>
      </CleanCardWrapper>
      <CleanCardWrapper>
        <p>You can DO iT Bhai</p>
      <AddTodo /> 
      </CleanCardWrapper>
      {/* <CardWrapper innerComponent={<TextComponent />} /> */}
      {/* the above component will help you to build a simple todo application and helps you to understand how it works  */}
    </>
  )
}

// const Header = React.memo(function Header({ title }) {
//   return (
//     <>
//       <h1>{title}</h1>
//     </>
//   )
// })

// function CustomBtn(props) {

//   function onClickHandler2() {
//     props.setCount(count => count + 1);
//   }

//   return (
//     <>
//       <button onClick={onClickHandler2}>
//         Counter {props.count}
//       </button>
//     </>
//   )
// }

// function Todo(props) {
//   return(
//     <>
//       <div>
//         <h1>{props.title}</h1>
//         <h2>{props.description}</h2>
//       </div>
//     </>
//   )
// }

function TextComponent() {
  return (
    <>
      <p>Hi There</p>
    </>
  )
}

export default App;