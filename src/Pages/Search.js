import React, { useState } from 'react'
import Layout from '../Layout/Layout'

import { ReactComponent as ArrowCircleLeft } from '../assets/logo/arrow-circle-left.svg'
import { ReactComponent as ArrowDown } from '../assets/logo/arrow-down.svg'
import { ReactComponent as TableIcon } from '../assets/logo/table-icon.svg'
import { ReactComponent as FileMinus } from '../assets/logo/file-minus.svg'
import { ReactComponent as ChartBreakout } from '../assets/logo/chart-breakout-square.svg'
import { ReactComponent as CPUChipset } from '../assets/logo/cpu-chip.svg'
import { ReactComponent as DownArrow } from '../assets/logo/down-arrow.svg'
import { ReactComponent as LeftArrow } from '../assets/logo/left-arrow.svg'
import { ReactComponent as ArrowLeft } from '../assets/logo/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../assets/logo/arrow-right.svg'
import ProductImage from '../assets/image/products/1.png'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import ProductModal from '../Components/ProductModal'

const Search = () => {
  const navigate = useNavigate()
  const [pageIndex, setPageIndex] = useState(1)
  const [totalPage, setTotalPage] = useState(20)
  const [modalOpen, setModalOpen] = useState(false)
  const [tab, setTab] = useState(0)
  const params = new URLSearchParams(window.location.search)
  const type = params.get('type')
  const query = params.get('query')
  const pagination = () => {
    const pages = []
    if (totalPage < 5) {
      for (let i = 0; i < totalPage; i++) {
        pages.push(
          <div
            className={pageIndex === i + 1 ? 'number active' : 'number'}
            onClick={() => setPageIndex(i + 1)}
          >
            {i + 1}
          </div>,
        )
      }
    } else if (pageIndex < 3) {
      for (let i = 0; i < 5; i++) {
        pages.push(
          <div
            className={pageIndex === i + 1 ? 'number active' : 'number'}
            onClick={() => setPageIndex(i + 1)}
          >
            {i + 1}
          </div>,
        )
      }
    } else if (pageIndex > totalPage - 2) {
      for (let i = 0; i < 5; i++) {
        pages.push(
          <div
            className={
              pageIndex === totalPage - 4 + i ? 'number active' : 'number'
            }
            onClick={() => setPageIndex(totalPage - 4 + i)}
          >
            {totalPage - 4 + i}
          </div>,
        )
      }
    } else {
      for (let i = 0; i < 5; i++) {
        pages.push(
          <div
            className={i === 2 ? 'number active' : 'number'}
            onClick={() => setPageIndex(pageIndex - 2 + i)}
          >
            {pageIndex - 2 + i}
          </div>,
        )
      }
    }
    return pages
  }

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
              <div className="text">
                9,491,435 results found for {`"${query}"`}
              </div>
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
          {totalPage > 1 && (
            <div className="pagination">
              <div className="btn" onClick={() => setPageIndex(pageIndex - 1)}>
                <ArrowLeft />
                <div className="text">Previous</div>
              </div>
              <div className="numbers">{pagination()}</div>
              <div className="btn" onClick={() => setPageIndex(pageIndex + 1)}>
                <div className="text">Next</div>
                <ArrowRight />
              </div>
            </div>
          )}
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

export default Search
