'use client'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

const Nav = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full ">
  <div className="mb-2 sm:mb-0">
    <a href="#" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Furniro</a>
  </div>
  <div className='space-x-14'>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Shop</a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About</a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Contact</a>
  </div>
  <div className='space-x-14'>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"></a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"></a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"></a>
    <a href="#" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"></a>
    
  </div>
</nav>
  )
}

export default Nav