'use client';

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

import Link from "next/link";
import { navLinks } from "@/constants";
import { useState } from "react";

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-4">
        <div className="h-full flex flex-col overflow-y-auto shadow-sm">
          <div className="flex flex-col w-full justify-center items-center mt-10">
            {
              navLinks.map((navLink, index) => (
                <div key={index} className="py-4" onClick={() => setOpen(false)}>
                  <Link href={navLink.url}  className='inline-block px-4 py-2 text-lg font-normal hover:cursor-pointer hover:font-bold
                      text-gray-300 hover:text-coral-red transition ease-in-out hover:scale-110 duration-300'>
                        {navLink.title}
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
