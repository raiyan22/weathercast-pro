import React from 'react'

function TempAndDetails() {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Cloudy or whatever</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt=""
                    className="w-20"
                />
                <p className="text-5xl"> 34°</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <i className="pi pi-sun text-white text-lg mr-1" />
                        Real Feel:
                        <span className="font-md ml-1" >32°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <i className="pi pi-cloud text-white text-lg mr-1" />
                        Humidity:
                        <span className="font-md ml-1" >32%</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <i className="pi pi-flag text-white text-lg mr-1" />
                        Wind:
                        <span className="font-md ml-1" >32 km/h</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <i className="pi pi-sun text-white text-lg mr-1" />
                <span className="font-md " > Sunrise: </span> <span className="font-md ml-1" > 5:25 AM</span> <span>|</span>
                <i className="pi pi-moon text-white text-md mr-1" />
                <span className="font-md " > Sunset: </span> <span className="font-md ml-1" > 6:45 PM </span> <span>|</span>
                <i className="pi pi-cloud-upload text-white text-lg mr-1" />
                <span className="font-md " > High: </span> <span className="font-md ml-1" >32°</span> <span>|</span>
                <i className="pi pi-cloud-download text-white text-lg mr-1" />
                <span className="font-md " > Low: </span> <span className="font-md ml-1" >32°</span>
            </div>

        </div>
    )
}

export default TempAndDetails