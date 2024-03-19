'use client'

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { ImagePlusIcon, LayoutDashboard, MessageSquareCodeIcon, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

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
        icon: MessageSquareCodeIcon,
        href: '/conversation',
        color: "text-violet-500",
    },
    {
        label: 'Image Generation',
        icon: ImagePlusIcon,
        color: "text-pink-700",
        href: '/image',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    }
]

const Sidebar = () => {

    const pathname = usePathname()

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

                <div className="space-y-4">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"

                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-8 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Sidebar