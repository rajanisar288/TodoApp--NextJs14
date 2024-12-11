'use client';

import React, { useState } from "react";
import List from "@/components/List";

export default function TodoApp() {
  // const [data, setdata] = useState({});
  const [updatedIndex, setUpdatedIndex] = useState({});
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')
  const [empList , setEmpList] = useState([])
  const [isUpdate , setIsUpdate] = useState(false)


  const updateEmp = (data, index)=>{
    setIsUpdate(true)
    // setdata(data)
    setUpdatedIndex(index)
        setName(data.name)
        setTitle(data.title)
        setAddress(data.address)
        setNumber(data.number)
    
  }

  function generateRandomId() {
    return Math.floor(Math.random() * 900000000) + 100000000;
  }

  const submitHander = (e) => {
    e.preventDefault();
    if(isUpdate){
        empList[updatedIndex].name = name
        empList[updatedIndex].title = title
        empList[updatedIndex].address = address
        empList[updatedIndex].number = number
        setEmpList([...empList])
        setIsUpdate(false)

    }else{
      const emp = {
        name,
        title,
        address,
        number,
        userId:generateRandomId(),
        createdAt:Date.now()}
        setEmpList([...empList, emp])
    }
         setName('')
        setTitle('')
        setAddress('')
        setNumber('')
  }


  const setValue = (feild, value) => {
    switch (feild) {
      case 'name':
        setName(value)
        break;
      case 'title':
        setTitle(value)
        break;
      case 'address':
        setAddress(value)
        break;
      case 'number':
        setNumber(value)
        break;

      default:
        break;
    }
  }
  return (
    <>
      <div className="container mx-auto mt-9 bg-slate-700 rounded p-3">
        <h1>Todos</h1>
        <div>
          <form onSubmit={submitHander} className="flex gap-3 flex-wrap mt-4">
            <input type="text" placeholder="Enter Employee Name" className="focus:outline-none rounded h-14 min-w-28 p-2" value={name} onChange={(e) => {
              setValue('name', e.target.value)
            }}></input>
            <input type="text" placeholder="Enter Employee Job Title" className="focus:outline-none rounded h-14 min-w-28 p-2"  value={title} onChange={(e) => {
              setValue('title', e.target.value)
            }}></input>
            <input type="text" placeholder="Enter Employee Address" className="focus:outline-none rounded h-14 min-w-28 p-2"  value={address} onChange={(e) => {
              setValue('address', e.target.value)
            }}></input>
            <input type="number" placeholder="Enter Employee Contact Number" className="focus:outline-none rounded h-14 min-w-28 p-2"  value={number} onChange={(e) => {
              setValue('number', e.target.value)
            }}></input>
            <button type="submit" className="focus:outline-none rounded h-14 min-w-28 p-2 px-6 bg-black text-white" >Add Employee</button>
          </form>
          <div>
          <List list={empList} updateEmp={updateEmp} />
          </div>
        </div>
      </div>
    </>
  );
}

