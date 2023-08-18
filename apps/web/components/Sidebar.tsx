// "use client"
// import Link from 'next/link'
// import { useSelectedLayoutSegment } from 'next/navigation'
// import { Mail, Bell, BarChart, Home, MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react'
// import { useState } from 'react'
// import Image from 'next/image'
// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }
// const Sidebar = () => {
//     const [expanded, setExpanded] = useState(true)
//     const segment = useSelectedLayoutSegment()
// const sidebarOptions = [
//     { name: "Dashboard", href: "/dashboard", icon: Home, current: !segment ? true : false },
//     { name: "Analytics", href: "/dashboard/analytics", icon: BarChart, current: `/${segment}` === "/analytics" ? true : false },
//     { name: "Notifications", href: "/dashboard/notifications", icon: Bell, current: `/${segment}` === "/notifications" ? true : false },
//     { name: "Messages", href: "/dashboard/messages", icon: Mail, current: `/${segment}` === "/messages" ? true : false },
// ]

//     return (
//         <aside className={expanded ? "" : ""}>
//             <div className={`hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col ${expanded ? "lg:w-72" : "lg:w-[90px]"}`}>
//                 <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2'>
//                     <div className={`flex h-16 shrink-0 ${expanded ? "justify-between" : ""} items-center`}>
//                         <h1 className={`text-3xl font-bold overflow-hidden transition-all ${expanded ? "w-32" : "hidden"}`}>Logo</h1>
//                         <button
//                             onClick={() => setExpanded((curr) => !curr)}
//                             className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ${expanded ? "" : "my-auto"}`}
//                         >
//                             {expanded ? <ChevronFirst /> : <ChevronLast />}
//                         </button>
//                     </div>
//                     <nav className='flex flex-col'>
//                         <ul role='list' className='flex flex-1 flex-col gap-y-7'>
//                             <li>
//                                 <ul role='list' className={`${expanded ? "" : ""} space-y-1`}>
//                                     {sidebarOptions.map((option) => (
//                                         <li key={option.name}>
//                                             <Link href={option.href} className={classNames(option.current ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700", `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold overflow-hidden transition-all`)}>
//                                                 <option.icon className={`text-gray-300 group-hover:text-white h-6 w-6 shrink-0`} />
//                                                 <span className={`${expanded ? "" : "hidden"}`}>{option.name}</span>
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </li>
//                         </ul>
//                     </nav>
//                     <div className={`border-t flex mt-auto ${expanded ? "py-3" : "py-3 cursor-pointer"}`}>
//                         <Image
//                             src="https://github.com/codesan-git.png"
//                             alt=""
//                             width={1500}
//                             height={1500}
//                             className={`w-10 h-10 rounded-md`}
//                         />
//                         <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "hidden"}`}>
//                             <div className="leading-4">
//                                 <h4 className="font-semibold">John Doe</h4>
//                                 <span className="text-xs text-gray-600">johndoe@gmail.com</span>
//                             </div>
//                             <MoreVertical size={20} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     )
// }

// export default Sidebar

"use client"
import { Mail, Bell, BarChart, Home, MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react'
import { useContext, createContext, useState } from "react"
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const SidebarContext = createContext<any>("")

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
                    <img
                        src="https://img.logoipsum.com/265.svg"
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
                            }`}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 py-2">
                        {sidebarOptions.map((option) => (
                            <li key={option.name} className='my-1'>
                                <Link href={option.href} className={classNames(option.current ? "bg-orange-400 text-white" : "text-gray-400 hover:text-white hover:bg-orange-400", `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold overflow-hidden transition-all`)}>
                                    <option.icon className={classNames(option.current ? `text-white` : `text-gray-300`, `group-hover:text-white h-6 w-6 shrink-0` )} />
                                    <span className={`${expanded ? "" : "hidden"}`}>{option.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img
                        src="https://github.com/codesan-git.png"
                        alt=""
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

// export function SidebarItem({ icon, text, active, alert }: any) {
//     const { expanded } = useContext(SidebarContext)

//     return (
//         <li
//             className={`
//         relative flex items-center py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors group
//         ${active
//                     ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//                     : "hover:bg-indigo-50 text-gray-600"
//                 }
//     `}
//         >
//             {icon}
//             <span
//                 className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
//                     }`}
//             >
//                 {text}
//             </span>
//             {alert && (
//                 <div
//                     className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
//                         }`}
//                 />
//             )}

//             {!expanded && (
//                 <div
//                     className={`
//           absolute left-full rounded-md px-2 py-1 ml-6
//           bg-indigo-100 text-indigo-800 text-sm
//           invisible opacity-20 -translate-x-3 transition-all
//           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//       `}
//                 >
//                     {text}
//                 </div>
//             )}
//         </li>
//     )
// }