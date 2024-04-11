import React from 'react'

function Inputs() {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text" placeholder="search for city...." className="text-xl rounded-full font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase transition ease-out hover:scale-[1.03]" />
                <i className="pi pi-search text-white cursor-pointer transition ease-out hover:scale-125" />
                <i className="pi pi-map-marker text-white cursor-pointer transition ease-out hover:scale-125" />
                {/* https://primereact.org/icons/ */}

            </div>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="metric" className="text-xl text-white font-light">
                    °C
                </button>
                <p className="text-xl text-white mx-1">|</p>
                <button name="imperial" className="text-xl text-white font-light">
                    °F
                </button>
            </div>

        </div>
    )
}

export default Inputs