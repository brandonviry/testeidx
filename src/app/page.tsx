"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  const [count,setCount] = useState(0)

  const incremente= ()=>{
    setCount(count+1)
  }
  const reset =()=>{
    setCount(0)
  }
  return (
    <main  className="flex flex-col justify-center items-center h-screen w-screen bg-neutral-900 ">

      <Card className="w-[350px] border-4 ">
        <CardHeader>
          <CardTitle>Compteur</CardTitle>
          
        </CardHeader>
        <CardContent>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {count}
          </h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={reset}>reset</Button>
          <Button onClick={incremente}>inscrémente</Button>
          
        </CardFooter>
      </Card>

    </main>
  );
}
