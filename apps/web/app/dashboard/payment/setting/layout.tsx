import {ReactNode} from 'react'

type Props = {
    children: ReactNode
}

const layout = (props: Props) => {
  return (
    <div className='flex mx-auto w-full'>
        <main className='w-full'>
            {props.children}
        </main>
    </div>
  )
}

export default layout