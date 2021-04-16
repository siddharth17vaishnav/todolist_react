import React ,{useEffect,useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";



function App (){
  document.title="TodoList";

  const[inputText,setinputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos] =useState([]);

  useEffect(() =>{
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed === true));
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed === false));
        break;
        default:
          case 'completed':
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos=()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
  };

  const getLocalTodos =()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
     let todoLocal= JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
    }

  }

  return (
    <div className="App">
      <header>
      <h1>hello</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setinputText ={setinputText}
      setStatus={setStatus}
     
      />

      <TodoList setTodos={setTodos}  
      todos={todos}
      filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
