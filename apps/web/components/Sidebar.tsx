"use client"
import { useState } from "react"
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'
import { Mail, Bell, BarChart, Home, MoreVertical, ChevronLast, ChevronFirst, LayoutGrid, User, Map, CreditCard, WalletCards, Settings2 } from 'lucide-react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    const segment = useSelectedLayoutSegment()
    const [expanded, setExpanded] = useState(true)
    const [openProfile, setOpenProfile] = useState(false)
    const [openPayment, setOpenPayment] = useState(false)

    const sidebarOptions = [
        { name: "Dashboard", href: "/dashboard", icon: Home, current: !segment ? true : false },
        { name: "Analytics", href: "/dashboard/analytics", icon: BarChart, current: `/${segment}` === "/analytics" ? true : false },
        { name: "Notifications", href: "/dashboard/notifications", icon: Bell, current: `/${segment}` === "/notifications" ? true : false },
        { name: "Messages", href: "/dashboard/messages", icon: Mail, current: `/${segment}` === "/messages" ? true : false },
    ]
    const sidebarDropdown = [
        {
            name: "Profile", icon: LayoutGrid, open: openProfile, action: () => setOpenProfile(!openProfile),
            menu: [
                { name: "Information", href: "/dashboard/profile", icon: User, current: `/${segment}` === "/profile" ? true : false },
                { name: "Address", href: "/dashboard/profile/address", icon: Map, current: `/${segment}` === "/profile/address" ? true : false }
            ]
        },
        {
            name: "Payment", icon: WalletCards, open: openPayment, action: () => setOpenPayment(!openPayment),
            menu: [
                { name: "Information", href: "/dashboard/payment/information", icon: CreditCard, current: `/${segment}/information` === "/payment/information" ? true : false },
                { name: "Setting", href: "/dashboard/payment/setting", icon: Settings2, current: `/${segment}/setting` === "/payment/setting" ? true : false }
            ]
        }
    ]

    console.log(`segment`, segment)
    return (
        <aside className="h-screen">
            <nav className="h-full min-w-[90px] flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <Image
                        src="https://img.logoipsum.com/265.svg"
                        alt="Logo"
                        width={500}
                        height={500}
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className={`${expanded ? "" : "mx-auto"} p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100`}
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <div className={`${expanded ? "" : "mx-auto"}`}>
                    <ul className={`${expanded ? "flex-1 px-3 py-2" : "mx-auto"}`}>
                        {sidebarOptions.map((option) => (
                            <li key={option.name} className='my-1'>
                                <Link href={option.href}>
                                    <div className={classNames(option.current ? "bg-orange-400 text-white" : "text-gray-400 hover:text-white hover:bg-orange-400", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold overflow-hidden transition-all")}>
                                        <option.icon className={classNames(option.current ? "text-white" : "text-gray-300", "group-hover:text-white h-6 w-6 shrink-0")} />
                                        <span className={`${expanded ? "" : "hidden"}`}>{option.name}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex-1 px-3 py-2">
                        {sidebarDropdown.map((option) => (
                            <li key={option.name} className='my-1'>
                                <Accordion type="single" collapsible className='p-3 mb-auto'>
                                    <AccordionItem value={option.name}>
                                        <AccordionTrigger className={classNames(option.open ? `text-white` : `text-gray-400`, `group-hover:text-white h-6 w-6 shrink-0 my-1 gap-x-2`)}>
                                            <option.icon className={classNames(option.open ? `text-white` : `text-gray-400`, `group-hover:text-white h-6 w-6 shrink-0`)} />
                                            <div className={`${expanded ? "" : "hidden"}`}>{option.name}</div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <ul>
                                                {
                                                    option.menu.map((submenu) => (
                                                        <li key={submenu.name}>
                                                            <Link href={submenu.href}>
                                                                <div className={classNames(submenu.current ? "bg-orange-400 text-white" : "text-gray-400 hover:text-white hover:bg-orange-400", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold overflow-hidden transition-all")}>
                                                                    <submenu.icon className={classNames(submenu.current ? "text-white" : "text-gray-300", "group-hover:text-white h-6 w-6 shrink-0")} />
                                                                    <span className={`${expanded ? "" : "hidden"}`}>{submenu.name}</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`border-t flex p-3 mt-auto ${expanded ? "" : "mx-auto"}`}>
                    <Image
                        src="https://github.com/codesan-git.png"
                        alt="Account Image"
                        width={500}
                        height={500}
                        placeholder="blur"
                        blurDataURL="https://github.com/codesan-git.png"
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