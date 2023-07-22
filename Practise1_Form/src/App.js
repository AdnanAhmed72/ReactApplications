import React,{ useState } from 'react';
import AddUsers from './Components/Users/AddUsers';
import UsersList from './Components/Users/UsersList';
function App() {
  const [userList,setUserList] = useState([])
  const addUserHandler = (uName,uAge) =>{
    setUserList((prevList)=>{
      return [...prevList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUsers onAddUsers={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
