import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

   const[firstName,setFirstName]=useState();
   const[lastName,setLastName]=useState();
   const[names,setNames]=useState([]);

   useEffect(()=>{
    const data=localStorage.getItem("names");
    if(data){
      setNames(JSON.parse(data));
    }
   },[]);
   
   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!firstName || !lastName)
    return;

    setNames([...names,{firstName,lastName}]);
    setFirstName("");
    setLastName("");
   };


  return (
    <div className="app">
      <div className="main">
      <h2>Full Name Details</h2>
       <form onSubmit={handleSubmit}>
       <div>
        <label>First Name:
        <input type="text" placeholder="Enter Your First Name" required value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </label>
        </div>
        <div>
        <label>Last Name:
        <input type="text" placeholder="Enter Your Last Name" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </label>
        </div>
        <div className="btn">
          <button type='submit'>Submit</button>
        </div>
       </form>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {
            names.map((name,index)=>(
              <tr key={index}>
                <td>{name.firstName}</td>
                <td>{name.lastName}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
