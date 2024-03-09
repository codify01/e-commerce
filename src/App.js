import { useState } from "react"
import AddTodo from "./component/addTodo"
import Display from "./component/display"
// import Header from "./component/header"

const App = ()=> {
  const sayHello = (mmm)=> {
    alert("Hello "+ mmm )
  }
  const pushTodo = (todoItem)=> {
    setallTodoItem([...allTodoItem, todoItem])
    // alert('izz working' +  todoItem)
  }
  const [allTodoItem, setallTodoItem] = useState([])
  return (
    <>
      {/* <Header title="Moti solo" name="post" sayHello={sayHello} mvp="AY"/>

      <h1>I am a MERN Stack Developer</h1>
      <p>You can call me Oluwaseun Agba Developer</p>

      <Header title="Tomorrow I wil run away" name="Delete post" sayHello={sayHello} mvp="Sam"/> */}
      <hr />
      <h1>Todo App</h1>
      <AddTodo add={pushTodo}/>
      <Display items={allTodoItem}/>

    </>
  )
}
export default App