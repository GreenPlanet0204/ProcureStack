import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { ReactComponent as ArrowCircle } from '../assets/logo/arrow-circle-right.svg'
import {
  IntegratedCircuits,
  DiscreteSemiconductors,
  PassiveComponents,
  Electromechanical,
  Connectors,
  TestEquipment,
  ToolsandSupplies,
  Sensors,
  CircuitProtection,
  Optoelectronics,
  PowerProducts,
  CablesandWire,
  Machining,
  IndustrialControl,
} from '../assets/image/category'
import {
  ArrowElectronics,
  Avnet,
  DigiKey,
  Distrelec,
  Farnell,
  FutureElectronics,
  HeilindElectronics,
  MasterElectronics,
  Mouser,
  Newark,
  Onlinecomponent,
  RS,
  RochesterElectronics,
  SagerElectronics,
  TME,
  TTI,
  Verical,
  element14APAC,
} from '../assets/image/distributor'
import {
  Aimtec,
  Amphenol,
  AnalogDevices,
  Honeywell,
  Infineon,
  KEMET,
  Microchip,
  Molex,
  Murata,
  NXPSemiconductors,
  Onsemi,
  Panasonic,
  Renesas,
  STMicroelectronics,
  Samtec,
  TEConnectivity,
  TexasInstruments,
  Vishay,
} from '../assets/image/manufacturers'
import { createSearchParams, useNavigate } from 'react-router-dom'

const Main = () => {
  const [param, setParam] = useState()
  const CategoryList = [
    {
      name: 'Integrated Circuits (ICs)',
      image: IntegratedCircuits,
    },
    {
      name: 'Discrete Semiconductors',
      image: DiscreteSemiconductors,
    },
    { name: 'Passive Components', image: PassiveComponents },
    { name: 'Electromechanical', image: Electromechanical },
    { name: 'Connectors', image: Connectors },
    { name: 'Test Equipment', image: TestEquipment },
    { name: 'Tools and Supplies', image: ToolsandSupplies },
    { name: 'Sensors', image: Sensors },
    { name: 'Circuit Protection', image: CircuitProtection },
    { name: 'Optoelectronics', image: Optoelectronics },
    { name: 'Power Products', image: PowerProducts },
    { name: 'Cables and Wire', image: CablesandWire },
    { name: 'Machining', image: Machining },
    { name: 'Industrial Control', image: IndustrialControl },
  ]

  const DistributorList = [
    { name: 'Avnet', image: Avnet },
    { name: 'Arrow Electronics', image: ArrowElectronics },
    { name: 'Digi-Key', image: DigiKey },
    { name: 'Distrelec', image: Distrelec },
    { name: 'element14 APAC', image: element14APAC },
    { name: 'Farnell', image: Farnell },
    { name: 'Future Electronics', image: FutureElectronics },
    { name: 'Heilind Electronics', image: HeilindElectronics },
    { name: 'Onlinecomponents.com', image: Onlinecomponent },
    { name: 'MasterElectronics', image: MasterElectronics },
    { name: 'MOuser', image: Mouser },
    { name: 'Newark', image: Newark },
    { name: 'Rochester Electronics', image: RochesterElectronics },
    { name: 'RS', image: RS },
    { name: 'Sager Electronics', image: SagerElectronics },
    { name: 'TME', image: TME },
    { name: 'TTI', image: TTI },
    { name: 'Verical', image: Verical },
  ]
  const ManufacturersList = [
    { name: 'Aimtec', image: Aimtec },
    { name: 'Amphenol', image: Amphenol },
    { name: 'Analog Devices', image: AnalogDevices },
    { name: 'Honeywell', image: Honeywell },
    { name: 'Infineon', image: Infineon },
    { name: 'KEMET', image: KEMET },
    { name: 'Microchip', image: Microchip },
    { name: 'Molex', image: Molex },
    { name: 'Murata', image: Murata },
    { name: 'NXP Semiconductors', image: NXPSemiconductors },
    { name: 'Onsemi', image: Onsemi },
    { name: 'Panasonic', image: Panasonic },
    { name: 'Renesas', image: Renesas },
    { name: 'Samtec', image: Samtec },
    { name: 'STMicroelectronics', image: STMicroelectronics },
    { name: 'TE Connectivity', image: TEConnectivity },
    { name: 'Texas Instruments', image: TexasInstruments },
    { name: 'Vishay', image: Vishay },
  ]

  const navigate = useNavigate()

  const SearchbyCat = (item) => {
    navigate({
      pathname: 'search',
      search: `?${createSearchParams({
        type: 'cat',
        query: item.name,
      })}`,
    })
  }

  const SearchbyDis = (item) => {
    navigate({
      pathname: 'search',
      search: `?${createSearchParams({
        type: 'dis',
        query: item.name,
      })}`,
    })
  }

  const SearchbyMan = (item) => {
    navigate({
      pathname: 'search',
      search: `?${createSearchParams({
        type: 'man',
        query: item.name,
      })}`,
    })
  }

  const Search = () => {
    navigate({
      pathname: 'search',
      search: `?${createSearchParams({
        query: param,
      })}`,
    })
  }
  return (
    <Layout tab="0">
      <div className="main">
        <div className="content">
          <div className="title">
            <div className="heading">Procure with Confidence</div>
            <div className="text">
              Streamline Your Electronic Component Sourcing Journey with Our
              Cutting-Edge Search Engine
            </div>
          </div>
          <div className="search">
            <div className="input">
              <input
                type="text"
                value={param}
                onChange={(e) => setParam(e.target.value)}
                placeholder="Search by keywords, tech specs, or part number"
              />
              <div className="hint">
                Try an example: <div className="item">MAX232</div>
              </div>
            </div>
            <div className="btn" onClick={() => Search()}>
              Search
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <div className="text">
              Search by
              <span> Category</span>
            </div>
            <div className="btn">
              <div className="text">View all categories</div>
              <ArrowCircle />
            </div>
          </div>
          <div className="section-content">
            <div className="frame">
              {CategoryList.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => SearchbyCat(item)}
                >
                  <div className="avatar">
                    <img src={item.image} />
                  </div>
                  <div className="text">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <div className="text">
              Search by
              <span> Distributor</span>
            </div>
            <div className="btn">
              <div className="text">View all distributors</div>
              <ArrowCircle />
            </div>
          </div>
          <div className="section-content">
            <div className="frame">
              {DistributorList.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => SearchbyDis(item)}
                >
                  <div className="avatar">
                    <img src={item.image} />
                  </div>
                  <div className="text">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <div className="text">
              Search by
              <span> Manufacturers</span>
            </div>
            <div className="btn">
              <div className="text">View all manufacturers</div>
              <ArrowCircle />
            </div>
          </div>
          <div className="section-content">
            <div className="frame">
              {ManufacturersList.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => SearchbyMan(item)}
                >
                  <div className="avatar">
                    <img src={item.image} />
                  </div>
                  <div className="text">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Main
