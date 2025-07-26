import React, { useState } from 'react'
import fourBedroom from '../../assets/icons/four-bedroom.svg'
import twoBedroom from '../../assets/icons/two-bedroom.svg'
import oneBedroom from '../../assets/icons/one-bedroom.svg'
import custom from '../../assets/icons/custom.svg'

const InverterLoadTab = () => {
  const buttons=[
    { id: 1, label: '1 Bedroom', icon: oneBedroom, active: true },
    { id: 2, label: '2 Bedroom', icon: twoBedroom,  active: false },
    { id: 3, label: '4 Bedroom', icon: fourBedroom, active: false },
    { id: 4, label: 'Custom', icon: custom, active: false },
  ]

  const defaultDevices = [
    { id: 1, name: 'Ceiling Fan', power: 70, quantity: 2 },
    { id: 2, name: 'Washing Machine', power: 100, quantity: 2 },
    { id: 3, name: 'Bulb', power: 10, quantity: 2 },
    { id: 4, name: 'Televison', power: 80, quantity: 2 },
    { id: 5, name: 'Air Conditioner', power: 200, quantity: 2 },
    { id: 6, name: 'Microwave', power: 110, quantity: 2 },
    { id: 7, name: 'Refrigerator', power: 190, quantity: 2 },
  ];

  const [activeButton, setActiveButton] = useState(buttons[0].id);

  const [devices, setDevices] = useState(defaultDevices);

  const updateQuantity = (id, delta) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === id
          ? {
              ...device,
              quantity: Math.max(0, device.quantity + delta),
            }
          : device
      )
    )
  };

  const totalOutput = devices.reduce(
    (sum, d) => sum + d.quantity * d.power,
    0
  );

  return (
    <div>
      <p className='mb-5 font-semibold text-2xl'>Inverter Load Calculator</p>

      <div className='flex gap-5'>
        {/* bedroom options */}
        <div className='flex flex-col gap-5 w-[125px]'>
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveButton(button.id)}
              className={`p-5 bg-white cursor-pointer rounded-lg shadow-md hover:bg-gray-100 transition-colors border-2 ${
                activeButton === button.id ? 'border-primary' : 'border-transparent'
              }`}
            >
              <div className='flex flex-col items-center justify-center gap-2'>
                <img src={button.icon} alt={button.label} className='w-8 h-8 object-cover' />
                <p className='text-xxs'>{button.label}</p>
              </div>
            </button>
            ))}
        </div>

        <div className="grid grid-cols-2 gap-5 w-full">
          {/* Left: Device Table */}
          <div className="bg-white rounded-lg shadow-sm border px-4 py-2 h-fit">
            {devices.map((device) => (
              <div key={device.id} className="flex items-center justify-between border-b border-gray-400 py-4 text-sm font-montserrat">
                <span className="w-1/4">{device.name}</span>
                <span className="w-1/4">{device.power}w</span>

                <div className="flex items-center justify-center gap-2 w-1/4">
                  <button
                    onClick={() => updateQuantity(device.id, -1)}
                    className="cursor-pointer bg-primary text-white w-6 h-6 flex items-center justify-center rounded"
                  >–</button>
                  <span>{device.quantity}</span>
                  <button
                    onClick={() => updateQuantity(device.id, 1)}
                    className="cursor-pointer bg-primary text-white w-6 h-6 flex items-center justify-center rounded"
                  >+</button>
                </div>

                <span className="w-1/4 text-right">{device.power * device.quantity}w</span>
              </div>
            ))}
          </div>

          {/* Right: Total Output */}
          <div className="bg-primary text-white rounded-lg shadow-lg px-6 py-4 h-fit">
            <p className="text-sm font-semibold">Total Output</p>
            <p className="text-3xl font-bold mt-2 tracking-wide">
              {totalOutput.toLocaleString()} <span className="text-base font-medium">Watts</span>
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default InverterLoadTab