'use client'

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const poppins = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: "text-sky-500"
    },
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      href: '/image',
    },
const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-xol h-full bg-[#0D0F10]  text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-e mb-14">
                    <div className="relative w-10 h-10 mr-4">
                        <Image
                            className="rounded-full"
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className={cn("text-2xl font-bold", poppins.className)}>
                        Gen-X
                    </h1>
                </Link>

            </div>

        </div>
    )
}

export default Sidebar