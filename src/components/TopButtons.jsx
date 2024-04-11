import React from 'react'

const TopButtons = () => {

  const cities = [
    {
      id: 1,
      title: "Oslo"
    },
    {
      id: 1,
      title: "London"
    },
    {
      id: 1,
      title: "Sydney"
    },
    {
      id: 1,
      title: "Tokyo"
    },
    {
      id: 1,
      title: "Denver"
    }
  ]

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium transition ease-out hover:scale-110">{city.title}</button>
      ))}
    </div>
  );
}

export default TopButtons