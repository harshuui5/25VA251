import React,{useState} from 'react'

function StudentReg() {
    const [data,setData]=useState({
        name:"",
        email:"",
        tel:""

    })
    const handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    };
    const handlesubmit=(e)=>{
        e.preventDefault();
        if (data.name=="" || data.email=="" || data.tel==""){
            alert("Fill all the details")
        }
        else{
            alert("Registration Successful")
    }
    setuser({
        name:"",
        email:"",
        tel:""
    })
};
  return (
    <>
    <h1>Student Registration Form</h1>
    <form>
        <input type='text' placeholder='Enter Your Name' value={(data.name)}/> <br/>
        <input type='email' placeholder='Enter Your Email'value={(data.email)}/> <br/>
        <input type='tel' placeholder='Enter Your number'/> <br/>
        <button type='submit'>Register Here!</button>
    </form>
    </>
  )
}

export default StudentReg