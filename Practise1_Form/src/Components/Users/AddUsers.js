import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUsers.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) =>{
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();
    const addUserHandler = event =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length ===0){
            setError({title:'Invalid Input',
            message:'Please enter a valid name and age (non empty values)'})
            return;
        }
        if(+enteredAge < 1){
            setError({title:'Invalid age',
            message:'Please enter a valid age (>0)'})
            return;
        }
        console.log(enteredUserName,enteredAge)
        setEnteredAge('');
        setEnteredUserName('')
        props.onAddUsers(enteredUserName,enteredAge);
    }
    const userNameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value)
    }
    const errorHandler = () =>{
        setError(null);
    }
    return(
        <div>
            {error && <ErrorModal title={error.title} 
            message={error.message}
            onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' value={enteredUserName} onChange={userNameChangeHandler}/>
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
                </Card>
        </div>
    )
}
export default AddUsers;