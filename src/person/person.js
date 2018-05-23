import React from 'react';

const boxstyle={
    width:'400px',
    backgroundColor:'white',
    border: '1px solid #eee',
    padding:'10px',
    marginTop:'30px',
    cursor: 'pointer'
  }

const Person = (props)=>{
return(<center> <div style={boxstyle} className='boxshadow'>
    <p onClick={props.click}>my name is <font className='Person'> {props.name} </font> i'm {props.age} years old.</p>
    <p>{props.children}</p> 
    <input type="text" onChange={props.changed} value={props.name}/>
</div></center> )
} 
export default Person;