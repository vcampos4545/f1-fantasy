import React from 'react'

const teamTile = () => {
    
    const getDrivers = async () => {
        const driverData = await fetch("/api/drivers")
        console.log(driverData);
        return driverData;
    }

    const drivers = getDrivers();

    return (
        <div>
            {drivers.map((driver) => {
                <img src={`https://fantasy.formula1.com/static-assets/build/images/players/front/${driver.id}.png?v=1.16`}/>
            })}
        </div>
    )
}

export default teamTile