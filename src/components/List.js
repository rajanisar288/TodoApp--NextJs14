'use client';


import Link from "next/link";
import React, { useEffect, useState } from "react";

const List = ({list,updateEmp}) => {
    let [empList, setEmpList] = useState(list);



    useEffect(() => {
        setEmpList(list);
    }, [list]);

    
    console.log(empList)
    let showList = <h2>no employee found :) {empList.length}</h2>
    if (empList.length > 0) {
        showList = <ul className="flex gap-3">

            {empList.map((item, index) => (
                <li className="min-w-48 p-2 rounded bg-black relative" key={index}>
                    <button onClick={()=>{
                        console.log(item)
                        let deleted = empList.splice(index,1)
                        console.log(deleted)
                       setEmpList([...empList])
                    }} className="absolute p-2 text-xl rounded bg-white text-black right-2 top-2">&#10005;</button>
                    <h1>{item.name}</h1>
                    <h1>{item.title}</h1>
                    <p>{item.address}</p>
                    <p>{item.number}</p>
                    <button onClick={()=>{
                        updateEmp(item, index)
                    }}>UpDate</button>
                </li>
            ))}
        </ul>

    }

    return <>
        <div className="container mx-auto text-white flex items-center box-border pt-4 gap-4">
            {showList}
        </div>
    </>
}

export default List