'use client'
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <div className="flex justify-between w-3xl items-center">
        <button className=" my-0.5 mx-2 border-2" onClick={()=> setCount(()=> count + 1)}>Add</button>
        <h1 className="flex text-2xl items-center w-3.5 justify-center">{count}</h1>
        <button className=" my-0.5 mx-2 border-2" onClick={()=> setCount(()=> count -1)}>Sub</button>

      </div>
    </div>
  )
}
