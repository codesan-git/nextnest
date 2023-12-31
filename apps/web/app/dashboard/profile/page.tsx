import { FC } from 'react'

interface PageProps {

}

const Page: FC<PageProps> = ({ }) => {
    return (
        <div className='bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen lg:pl-72'>
            <div className='mx-auto max-w-2xl text-center'>
                <h2 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl'>Dashboard/Profile</h2>
            </div>
        </div>
    )
}

export default Page