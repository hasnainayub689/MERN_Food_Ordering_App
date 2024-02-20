import React from 'react'
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "./ui/sheet"
import {Menu} from "lucide-react"
import {Separator} from "./ui/separator"
import { Button } from './ui/button'

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-blue-500'/>
            </SheetTrigger>
            <SheetContent className='space-y-3'>
                <SheetTitle>
                    <span>Welcome to Foodio.com!</span>
                </SheetTitle>
                <Separator/>
                <SheetDescription className='flex'>
                    <Button className='flex-1  font-bold bg-blue-500' >Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
