import React from 'react'

const Footer = () => {
    return (
        <div className='bg-blue-500 py-10'>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
            Foodio.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
            <span className='pt-3 md:pt-0'>Privacy Policy</span>
            <span className='pt-3 md:pt-0'>Terms of Service</span>
            </span>
        </div>
        </div>
    )
}

export default Footer
