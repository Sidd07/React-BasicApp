import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './person/person.css';
import Person from './person/person';

class App extends Component {
  state={
    persons: [
      {
       id:1, name:'Taksheel',age:25
      },
      {
        id:2,name:'siddhant',age:21
      }
       
    ]
  }
  handleclick =(taxil)=>{
    //console.log('its clicked')
    this.setState({
      persons: [
        {
          name: taxil , age:25
        },
        {
          name:'siddhant',age:21
        }
      ]
    })
    
  }
  deletePersonHandler = (personIndex)=>{
     const persondel = [...this.state.persons];
     persondel.splice(personIndex,1);
     this.setState({persons:persondel});
  }

  namechangehandleclick =(changed,id)=>{
   const singleperson=this.state.persons.findIndex(p => {
     return p.id === id;
   });
   const namechangeperson ={...this.state.persons[singleperson]};

  namechangeperson.name =changed.target.value;
  const multipleperson= [...this.state.persons];
  multipleperson[singleperson]=namechangeperson;
    this.setState({
      persons:multipleperson});
    
  }
  togglePersonHandler=()=>{
     const doesShow=this.state.showPerson;
     this.setState( {showPerson:!doesShow} );
  }
  render() {
    const style={
      backgroundColor: 'white',
      width: '100%' ,
      height:'650px',
      marginTop:'-22px', 
    }
    const buttonstyle={
      backgroundColor:'green',
      font:'inherit',
      color:'white',
      border:'2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
   
    let persons= null;
    

    
    if(this.state.showPerson){
      persons=(
        <div>
          {
            this.state.persons.map((persons,index) =>{
              return <Person name={persons.name} age={persons.age} key={persons.id} click={()=>this.deletePersonHandler(index)
              }  changed={(changed)=> this.namechangehandleclick(changed,persons.id)}> siddhant is smart.
              </Person>
            })
          }      
        </div>);
        buttonstyle.backgroundColor='red';
    }
   
    const classes= [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }

    if(this.state.persons.length<=1){
      classes.push('blue');
    }

    return (
      <div className="App" style={style}>
       <h1>HI LEARN REACT QUICK AS***LE </h1>
       <p className={classes.join(' ')}>it's me random text</p>
       <button onClick={this.togglePersonHandler} style={buttonstyle}> click me! </button>
       {persons}
      </div>
    );


    // return React.createElement('div',{className:"App"},React.createElement('h1',null,'i\'m siddhant'))
  }
}

export default App;
