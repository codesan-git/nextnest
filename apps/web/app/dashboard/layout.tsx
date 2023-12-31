import Sidebar from '@web/components/Sidebar'
import {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const layout = (props: Props) => {
  return (
    <div className='flex mx-auto w-full'>
        <aside>
            <Sidebar />
        </aside>
        <main className='w-full'>
            {props.children}
        </main>
    </div>
  )
}

export default layout