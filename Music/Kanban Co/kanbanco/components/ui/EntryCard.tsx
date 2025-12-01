import React from 'react'
import styles from './styles.module.css'
import { DraggableCardBody } from '@/components/ui/draggable-card'
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface CardDemoProps {
  label?: string
  title: string
  description?: string
  
}

// c




export function CardDemo() {
  return (
    <>
    <div className="flex flex-col items-center justify-start pt-10 gap-6">

  <Button className='ml-64 absolute mb-120'>+</Button>

  <Card className="w-80  mb-120 bg-gray-100 dark:bg-gray-800">
    <CardHeader className="flex flex-col items-center"> 
      <CardTitle className="text-xl">Create Card</CardTitle>
      <CardDescription>
        Create Card name and description here.
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      <form>
        <div className="flex flex-col gap-6">
        </div>
      </form>
    </CardContent>
  </Card>
</div>
    </>
  )
}
