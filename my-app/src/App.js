import { useEffect, useState } from 'react';
import './App.css';
import Todos from './Components/Todos';
function App() {
  const [todos,setTodos] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async() => {
      try{
        setLoading(false)
        let res = await fetch('http://localhost:8080/todos')
        let data = await res.json()
        console.log(data)
        setTodos(data)
      }catch(e){
        console.log(e)
      }
    }
    fetchData()
  },[])
  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <h1>Todos</h1>
      {todos.map((Todo) => (
        <Todos key={Todo.id} title = {Todo.title} status = {Todo.status}/>
      ))}
    </div>
  );
}

export default App;
