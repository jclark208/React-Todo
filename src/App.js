import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
  
    super();
    
    this.state = {tasks};
  }

  
  addTask = (e, task) => {
    e.preventDefault();

   
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  };

  
  toggleComplete = taskId => {

    this.setState({

      
      tasks: this.state.tasks.map(task => {

       
        if(taskId === task.id) {
          return{
            ...task,
            completed: !task.completed
          };
        }
        return task;

      })

    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({ tasks: this.state.tasks.filter(task => task.completed === false)});

  }

  render() {
    return (
      <div>
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
      </div>
              <TodoList
              tasks={this.state.tasks}
              toggleComplete={this.toggleComplete}
              clearCompleted={this.clearCompleted}
            />
            </div>
    );
  }
}

export default App;
