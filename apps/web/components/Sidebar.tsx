"use client"
import { Mail, Bell, BarChart, Home, MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react'
import { createContext, useState } from "react"
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const segment = useSelectedLayoutSegment()

    const sidebarOptions = [
        { name: "Dashboard", href: "/dashboard", icon: Home, current: !segment ? true : false },
        { name: "Analytics", href: "/dashboard/analytics", icon: BarChart, current: `/${segment}` === "/analytics" ? true : false },
        { name: "Notifications", href: "/dashboard/notifications", icon: Bell, current: `/${segment}` === "/notifications" ? true : false },
        { name: "Messages", href: "/dashboard/messages", icon: Mail, current: `/${segment}` === "/messages" ? true : false },
    ]
    const [expanded, setExpanded] = useState(true)

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <Image
                        src="https://img.logoipsum.com/265.svg"
                        alt="Logo"
                        width={1500}
                        height={1500}
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
                            }`}
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <ul className="flex-1 px-3 py-2">
                    {sidebarOptions.map((option) => (
                        <li key={option.name} className='my-1'>
                            <Link href={option.href} className={classNames(option.current ? "bg-orange-400 text-white" : "text-gray-400 hover:text-white hover:bg-orange-400", `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold overflow-hidden transition-all`)}>
                                <option.icon className={classNames(option.current ? `text-white` : `text-gray-300`, `group-hover:text-white h-6 w-6 shrink-0`)} />
                                <span className={`${expanded ? "" : "hidden"}`}>{option.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="border-t flex p-3">
                    <Image
                        src="https://github.com/codesan-git.png"
                        alt="Account Image"
                        width={1500}
                        height={1500}
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold">codesan-git</h4>
                            <span className="text-xs text-gray-600">satrianugrahacode@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}