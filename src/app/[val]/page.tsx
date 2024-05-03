"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Params {
  val?: number
}
export default function Decr({ params }: { params: Params }) {
  const val = params.val || 1000
  const [count, setCount] = useState(val)
  const [flag, setFlag] = useState(false)

  const decr = () => {
    if (count > 0) {
      setCount(valCount => valCount - 1);

    }
    else {
      setFlag(true)
    }
  }
  const reset = () => {
    setCount(val)
  }
  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen bg-neutral-900 ">
      <Alert variant="destructive" style={{ display: flag ? "block" : "none" , top:"1%"  ,position:"absolute" }} >
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erreur </AlertTitle>
        <AlertDescription>
          Le Compteur est déja à 0
        </AlertDescription>
        <Button onClick={() => setFlag(false)} variant="link" className="text-red-500">fermer</Button>
     
      </Alert>
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
          <Button onClick={decr}>Descrémente</Button>

        </CardFooter>
      </Card>

    </main>
  );
}
