"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, ChevronDown, Moon, MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";

import { AlignRight } from "lucide-react";
import { defaultLinks } from "@/constants/nav";
import { roboto } from "@/app/fonts";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="md:hidden border-b mb-4 pb-2 w-full">
        <nav className="flex justify-between w-full items-center">
          <div className="font-semibold text-lg">Logo</div>
          <Button variant="ghost" onClick={() => setOpen(!open)}>
            <AlignRight />
          </Button>
        </nav>
        {open ? (
          <div className="my-4 p-4 bg-muted">
            <ul className="space-y-2">
              {defaultLinks.map((link) => (
                <li
                  key={link.title}
                  onClick={() => setOpen(false)}
                  className=""
                >
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href
                        ? "text-primary hover:text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="hidden md:flex justify-end items-center space-x-6 p-2 py-4 border-b">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src="/nav_user.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ChevronDown />
        </div>
        <div className={roboto.className}>
          <p className="font-bold leading-[14px]">Ronald Richards</p>
          <p className="text-[#747474]">Instructor</p>
        </div>
        <Bell />
        <Moon />
        <MoreVertical />
      </div>
    </>
  );
}
