import React, { useState } from 'react'
import logo from '../image/logo.png';
import Showdata from './Showdata';
import './todo.css';

function Todo() {

    const [task , setTask] = useState('');
    const [data , setData] = useState([]);

    const handlechange = (e) =>{
        setTask(e.target.value);
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        const newArray = task;
        setData([newArray , ...data])
        setTask('');
    }

    const deleteitems = (curr)=>{
        const newArray  = data.filter((value , index) =>{
            return(
                index !== curr
            )
        })
        setData(newArray);
    }
    

  return (
    <>
    <div className='body-container'>
        <div className='main-container'>
            <div className='logo'>
                <img src={logo} alt = 'logo'></img>
                <div className='logo-title'>
                   Add your Items here 
                </div>
            </div>
            <form onSubmit={handlesubmit}>
                <div className='additems'>
                    <div className='input-container'>
                        <input type='text' placeholder="✍️ add items" value={task} onChange={handlechange}  ></input>
                        <button type='submit' >➕</button>
                    </div>        
    
                </div>

            </form>   

            {
                data.map((value, index) =>{
                    return (
                        <Showdata 
                            key = {index} 
                            id = {index} 
                            task={value}
                            onSelect = {deleteitems}
                        >
                        </Showdata>
                    )
                })
            }         
        </div>      

    </div>

    </>
  )
}

export default Todo
