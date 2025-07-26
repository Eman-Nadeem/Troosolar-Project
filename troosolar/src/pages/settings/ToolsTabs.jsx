import React from 'react'
import Tabs from '../../components/Tabs';
import InverterLoadTab from './InverterLoadTab';
import SolarPanelTab from './SolarPanelTab';
import BatteryEstimatorTab from './BatteryEstimatorTab';
import SolarSavingsTab from './SolarSavingsTab';


const ToolsTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState('Inverter Load Calculator');

  return (
    <div className='font-montserrat'>
      <div className='w-fit mb-5'>
        <Tabs options={['Inverter Load Calculator', 'Solar Panel Calculator', 'Battery Estimator', 'Solar Savings Estimator']} onChange={setSelectedTab} active={selectedTab}/>
      </div>

      {selectedTab === 'Inverter Load Calculator' && <InverterLoadTab/>}
      {selectedTab === 'Solar Panel Calculator' && <SolarPanelTab/>}
      {selectedTab === 'Battery Estimator' && <BatteryEstimatorTab/>}
      {selectedTab === 'Solar Savings Estimator' && <SolarSavingsTab/>}
    </div>
  )
}

export default ToolsTabs