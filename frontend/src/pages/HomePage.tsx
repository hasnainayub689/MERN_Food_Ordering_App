import React from 'react'
import landingImage from "../assets/landing_1.png"
import appDownload from '../assets/appDownload.png'

const HomePage = () => {
    return (
            <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-blue-600">
                Tuck into a takeway today
            </h1>
            <span className="text-xl">Food is just a click away!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} alt="" />
                <div className="flex flex-col items-center justify-center gap-4 text-center ">
                    <span className='font-bold tracking-tighter text-3xl'>
                        Order takeaway even faster!
                    </span>
                    <span>Download the Foodio App for faster ordering and personalized recomendations</span>
                <img src={appDownload} alt="" />
                </div>
            </div>
            </div>
    )
}

export default HomePage
