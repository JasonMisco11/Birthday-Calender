import React from 'react'
import Image from "next/image"
import styles from './styles.module.css'
 
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

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm ml-24 mb-32">
      <CardHeader>
        <CardTitle>Create Card</CardTitle>
        <CardDescription>
          Create Card name and description here.
        </CardDescription>
        <CardAction>
          <Button variant="link">Add Card</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Card Name</Label>
              <Input
                title="string"
                type="email"
                placeholder="Backlog"
                required
              />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Create 
        </Button>
        
      </CardFooter>
    </Card>
  )
}
