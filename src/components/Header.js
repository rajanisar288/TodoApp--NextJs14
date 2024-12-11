'use client';

import Link from "next/link";
import React from "react";

const Header = ()=>{
    return <>
        <div className="container mx-auto bg-gray-500 h-10 text-black flex items-center box-border pl-4 gap-4">
            <Link href={'/'}>
                <h1>Home</h1>
            </Link>
            <Link href={'/todo-app'}>
                <h1>Todo App</h1>
            </Link>
            <Link href={'/server-app'}>
                <h1>Server Side App</h1>
            </Link>
        </div>
    </>
}

export default Header