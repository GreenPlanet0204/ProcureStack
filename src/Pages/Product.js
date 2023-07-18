import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'

import { ReactComponent as ArrowCircleLeft } from '../assets/logo/arrow-circle-left.svg'
import { ReactComponent as ArrowDown } from '../assets/logo/arrow-down.svg'
import { ReactComponent as TableIcon } from '../assets/logo/table-icon.svg'
import { ReactComponent as FileMinus } from '../assets/logo/file-minus.svg'
import { ReactComponent as ChartBreakout } from '../assets/logo/chart-breakout-square.svg'
import { ReactComponent as CPUChipset } from '../assets/logo/cpu-chip.svg'
import { ReactComponent as DownArrow } from '../assets/logo/down-arrow.svg'
import { ReactComponent as LeftArrow } from '../assets/logo/left-arrow.svg'
import ProductImage from '../assets/image/products/1.png'
import Modal from 'react-modal'
import ProductModal from '../Components/ProductModal'

const Product = () => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [tab, setTab] = useState(0)
  const [cType, setCType] = useState('12m')

  const OpenSpec = () => {
    setTab(0)
    setModalOpen(true)
  }

  const OpenDesc = () => {
    setTab(1)
    setModalOpen(true)
  }
  return (
    <Layout tab="0">
      <div className="main">
        <div className="container">
          <div className="section-header">
            <div className="left">
              <div className="btn" onClick={() => navigate('/')}>
                <ArrowCircleLeft />
                <div className="text">Back</div>
              </div>
              <div className="text">RF Antennas</div>
            </div>
            <div className="right">
              <div className="actions">
                <div className="select sort">
                  <div className="text">Sort: Relevance</div>
                  <ArrowDown />
                </div>
                <div className="select availability">
                  <div className="text">Availability: All</div>
                  <ArrowDown />
                </div>
                <div className="select currency">
                  <div className="text">Currency: $</div>
                  <ArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="content">
              <div className="info">
                <img src={ProductImage} />
                <div className="row">
                  <div className="frame">
                    <div className="name">TE Connectivity / AMP</div>
                    <div className="badges">
                      <div className="badge">5749230-1</div>
                      <div className="text">$ 3.420</div>
                    </div>
                    <div className="text">
                      Circular DIN Connector, 4 Contact(s), Female, Board Mount,
                      Solder Terminal, Receptacle
                    </div>
                  </div>
                  <div className="btn-group">
                    <div className="btn">
                      <TableIcon />
                      Add to BOM
                    </div>
                    <div className="btn">
                      <FileMinus />
                      Data Sheet
                    </div>
                    <div className="btn">
                      <ChartBreakout />
                      Manufacturer Page
                    </div>
                    <div className="btn">
                      <CPUChipset />
                      CAD Models
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="row-header">
                <div className="cell col-13">
                  <div className="text">Distributor</div>
                  <div className="icon">
                    <DownArrow />
                  </div>
                </div>
                <div className="cell col-13">SKU</div>
                <div className="cell col-8">Stock</div>
                <div className="cell col-8">MOQ</div>
                <div className="cell col-8">Pkg</div>
                <div className="cell col-6">Bulk Pricing</div>
                <div className="cell col-6">1</div>
                <div className="cell col-6">10</div>
                <div className="cell col-6">100</div>
                <div className="cell col-6">1000</div>
                <div className="cell col-6">10000</div>
                <div className="cell col-6">Updated</div>
              </div>
              <div className="row">
                <div className="cell col-13">
                  <div className="icon">
                    <LeftArrow />
                  </div>
                  <div className="text">Verical</div>
                </div>
                <div className="cell col-13">5749230-1</div>
                <div className="cell col-8">
                  <div className="badge">4,400</div>
                </div>
                <div className="cell col-8">40</div>
                <div className="cell col-8"></div>
                <div className="cell col-6">$</div>
                <div className="cell col-6"></div>
                <div className="cell col-6"></div>
                <div className="cell col-6">2.940</div>
                <div className="cell col-6">2.780</div>
                <div className="cell col-6">2.780</div>
                <div className="cell col-6">6m</div>
              </div>
              <div className="row">
                <div className="cell col-13">
                  <div className="icon">
                    <LeftArrow />
                  </div>
                  <div className="text">Mouser</div>
                </div>
                <div className="cell col-13">571-5749230-1</div>
                <div className="cell col-8">
                  <div className="badge">4,992</div>
                </div>
                <div className="cell col-8">1</div>
                <div className="cell col-8">Tube</div>
                <div className="cell col-6">$</div>
                <div className="cell col-6">4.410</div>
                <div className="cell col-6">3.490</div>
                <div className="cell col-6">3.490</div>
                <div className="cell col-6">3.200</div>
                <div className="cell col-6">3.200</div>
                <div className="cell col-6">6m</div>
              </div>
              <div className="row">
                <div className="cell col-13">
                  <div className="icon">
                    <LeftArrow />
                  </div>
                  <div className="text">Digi-Key</div>
                </div>
                <div className="cell col-13">A99369-ND</div>
                <div className="cell col-8">
                  <div className="badge">2,559</div>
                </div>
                <div className="cell col-8">1</div>
                <div className="cell col-8">Tube</div>
                <div className="cell col-6">$</div>
                <div className="cell col-6">4.410</div>
                <div className="cell col-6">3.929</div>
                <div className="cell col-6">3.488</div>
                <div className="cell col-6">2.867</div>
                <div className="cell col-6">2.646</div>
                <div className="cell col-6">6m</div>
              </div>
              <div className="row">
                <div className="cell col-13">
                  <div className="icon">
                    <LeftArrow />
                  </div>
                  <div className="text">Chip One Stop Global</div>
                </div>
                <div className="cell col-13">C1S757100876401</div>
                <div className="cell col-8">
                  <div className="badge">4,435</div>
                </div>
                <div className="cell col-8">40</div>
                <div className="cell col-8"></div>
                <div className="cell col-6">$</div>
                <div className="cell col-6"></div>
                <div className="cell col-6"></div>
                <div className="cell col-6">3.390</div>
                <div className="cell col-6">2.980</div>
                <div className="cell col-6">2.980</div>
                <div className="cell col-6">2d</div>
              </div>
              <div className="row">
                <div className="cell col-13">
                  <div className="icon">
                    <LeftArrow />
                  </div>
                  <div className="text">Farnell</div>
                </div>
                <div className="cell col-13">1846369</div>
                <div className="cell col-8">
                  <div className="badge">0</div>
                </div>
                <div className="cell col-8">5,000</div>
                <div className="cell col-8"></div>
                <div className="cell col-6">$</div>
                <div className="cell col-6"></div>
                <div className="cell col-6"></div>
                <div className="cell col-6"></div>
                <div className="cell col-6"></div>
                <div className="cell col-6">3.752</div>
                <div className="cell col-6">2d</div>
              </div>
            </div>
            <div className="container">
              <div className="btn">Show All</div>
              <div className="actions">
                <div className="btn" onClick={() => OpenSpec()}>
                  Specification
                </div>
                <div className="btn" onClick={() => OpenDesc()}>
                  Description
                </div>
              </div>
            </div>
          </div>
          <div className="items other">
            <div className="header">
              <div className="text">Inventory History</div>
              <div className="btn-group">
                <div
                  className={cType === '12m' ? 'button active' : 'button'}
                  onClick={() => setCType('12m')}
                >
                  12 months
                </div>
                <div
                  className={cType === '30d' ? 'button active' : 'button'}
                  onClick={() => setCType('30d')}
                >
                  30 days
                </div>
                <div
                  className={cType === '7d' ? 'button active' : 'button'}
                  onClick={() => setCType('7d')}
                >
                  7 days
                </div>
              </div>
            </div>
          </div>
          <div className="items other">
            <div className="header">
              <div className="text">Compliance</div>
            </div>
            <div className="table">
              <div className="row table-header">
                Environmental Classification
              </div>
              <div className="row">
                <div className="first">Halogen Free</div>
                <div className="second">Low Halogen</div>
              </div>
              <div className="row">
                <div className="first">REACH SVHC</div>
                <div className="second">Unknown</div>
              </div>
              <div className="row">
                <div className="first">RoHS</div>
                <div className="second">Compliant</div>
              </div>
            </div>
            <div className="table">
              <div className="row table-header">Compliance Statements</div>
              <div className="row">
                <div className="first">
                  <div className="btn">Rohs Statement</div>
                </div>
                <div className="second">
                  <div className="text">1 pages</div>
                  <div className="text">9 years ago</div>
                </div>
              </div>
              <div className="row">
                <div className="first">
                  <div className="btn">Conflict Mineral Statement</div>
                </div>
                <div className="second">
                  <div className="text">2 pages</div>
                  <div className="text">9 years ago</div>
                </div>
              </div>
              <div className="row">
                <div className="first">
                  <div className="btn">Rohs Statement</div>
                </div>
                <div className="second">
                  <div className="text">1 pages</div>
                  <div className="text">10 years ago</div>
                </div>
              </div>
              <div className="row">
                <div className="first">
                  <div className="btn">Reach Statement</div>
                </div>
                <div className="second">
                  <div className="text">2 pages</div>
                  <div className="text">9 years ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="items other">
            <div className="header">
              <div className="text">Supply Chain</div>
            </div>
            <div className="table">
              <div className="row">
                <div className="first">Country of Origin</div>
                <div className="second">CN</div>
              </div>
              <div className="row">
                <div className="first">Lifecycle Status</div>
                <div className="second">
                  Production (Last Updated: 2 years ago)
                </div>
              </div>
              <div className="row">
                <div className="first">Manufacturer Lifecycle Status</div>
                <div className="second">ACTIVE (Last Updated: 2 years ago)</div>
              </div>
            </div>
          </div>
          <div className="items other">
            <div className="header">
              <div className="text">Technical Specifications</div>
            </div>
            <div className="table">
              <div className="row">
                <div className="first">Country of Origin</div>
                <div className="second">CN</div>
              </div>
              <div className="row">
                <div className="first">Lifecycle Status</div>
                <div className="second">
                  Production (Last Updated: 2 years ago)
                </div>
              </div>
              <div className="row">
                <div className="first">Manufacturer Lifecycle Status</div>
                <div className="second">ACTIVE (Last Updated: 2 years ago)</div>
              </div>
            </div>
            <div className="table">
              <div className="row table-header">Physical</div>
              <div className="row">
                <div className="first">Body Material</div>
                <div className="second">Plastic</div>
              </div>
              <div className="row">
                <div className="first">Color</div>
                <div className="second">Black</div>
              </div>
              <div className="row">
                <div className="first">Contact Plating</div>
                <div className="second">Gold, Tin</div>
              </div>
              <div className="row">
                <div className="first">Housing Color</div>
                <div className="second">Black</div>
              </div>
              <div className="row">
                <div className="first">Housing Material</div>
                <div className="second">Thermoplastic</div>
              </div>
              <div className="row">
                <div className="first">Mount</div>
                <div className="second">Through Hole</div>
              </div>
              <div className="row">
                <div className="first">Number of Terminals</div>
                <div className="second">4</div>
              </div>
              <div className="row">
                <div className="first">Plating</div>
                <div className="second">Tin</div>
              </div>
              <div className="row">
                <div className="first">Underplate Material</div>
                <div className="second">Nickel</div>
              </div>
            </div>
            <div className="table">
              <div className="row table-header">Dimensions</div>
              <div className="row">
                <div className="first">Depth</div>
                <div className="second">12.83 mm</div>
              </div>
              <div className="row">
                <div className="first">Height</div>
                <div className="second">13 mm</div>
              </div>
              <div className="row">
                <div className="first">Length</div>
                <div className="second">14 mm</div>
              </div>
              <div className="row">
                <div className="first">Tail Length</div>
                <div className="second">3.18 mm</div>
              </div>
              <div className="row">
                <div className="first">Width</div>
                <div className="second">12.83 mm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className="modal"
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <ProductModal initTab={tab} />
      </Modal>
    </Layout>
  )
}

export default Product
