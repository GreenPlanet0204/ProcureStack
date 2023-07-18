import React, { useState } from 'react'
import ProductImage from '../assets/image/products/1.png'
import ProductImage2 from '../assets/image/products/2.png'
import ProductImage3 from '../assets/image/products/3.png'
import ProductImage4 from '../assets/image/products/4.png'
import ProductImage5 from '../assets/image/products/5.png'
import { ReactComponent as DownloadIcon } from '../assets/logo/download-icon.svg'

const ProductModal = ({ initTab }) => {
  const [tab, setTab] = useState(initTab)
  const [imgTab, setImgTab] = useState(0)
  const [image, setImage] = useState(ProductImage)

  const images = [
    { tab: 0, image: ProductImage },
    { tab: 1, image: ProductImage2 },
    { tab: 2, image: ProductImage3 },
    { tab: 3, image: ProductImage4 },
    { tab: 4, image: ProductImage5 },
  ]

  const SelectImage = (item) => {
    setImgTab(item.tab)
    setImage(item.image)
  }

  return (
    <div className="container">
      <div className="task">
        <div className="info">
          <img src={ProductImage} />
          <div className="row">
            <div className="name">TE Connectivity / AMP</div>
            <div className="badges">
              <div className="badge">5749230-1</div>
              <div className="text">$ 3.420</div>
            </div>
            <div className="text">
              Circular DIN Connector, 4 Contact(s), Female, Board Mount, Solder
              Terminal, Receptacle
            </div>
          </div>
        </div>
      </div>
      <div className="tabs">
        <div
          className={tab === 0 ? 'tab active' : 'tab'}
          onClick={() => setTab(0)}
        >
          Specs
        </div>
        <div
          className={tab === 1 ? 'tab active' : 'tab'}
          onClick={() => setTab(1)}
        >
          Descriptions
        </div>
        <div
          className={tab === 2 ? 'tab active' : 'tab'}
          onClick={() => setTab(2)}
        >
          Images
        </div>
        <div
          className={tab === 3 ? 'tab active' : 'tab'}
          onClick={() => setTab(3)}
        >
          Documents
        </div>
      </div>
      {tab === 0 && (
        <>
          <div className="table">
            <div className="header">Supply Chain</div>
            <div className="row">
              <div className="first">Lifecycle Status</div>
              <div className="second">
                Production (Last Updated: 1 week ago)
              </div>
            </div>
          </div>
          <div className="table">
            <div className="header">Physical</div>
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
            <div className="header">Technical</div>
            <div className="row">
              <div className="first">Circuit Application</div>
              <div className="second">Signal</div>
            </div>
            <div className="row">
              <div className="first">Connector System</div>
              <div className="second">Wire-to-Board</div>
            </div>
            <div className="row">
              <div className="first">Connector Type</div>
              <div className="second">Receptacle, Socket</div>
            </div>
            <div className="row">
              <div className="first">Contact Gender</div>
              <div className="second">Female</div>
            </div>
            <div className="row">
              <div className="first">Current Rating</div>
              <div className="second">1 A</div>
            </div>
            <div className="row">
              <div className="first">Fastening Type</div>
              <div className="second">Pull, Push</div>
            </div>
            <div className="row">
              <div className="first">Features</div>
              <div className="second">Shielded</div>
            </div>
            <div className="row">
              <div className="first">Gender</div>
              <div className="second">Female</div>
            </div>
            <div className="row">
              <div className="first">Mating Alignment</div>
              <div className="second">With</div>
            </div>
            <div className="row">
              <div className="first">Max Operating Temperature</div>
              <div className="second">105 °C</div>
            </div>
            <div className="row">
              <div className="first">Min Operating Temperature</div>
              <div className="second">-55 °C</div>
            </div>
            <div className="row">
              <div className="first">Number of Contacts</div>
              <div className="second">4</div>
            </div>
            <div className="row">
              <div className="first">Number of Ports</div>
              <div className="second">1</div>
            </div>
            <div className="row">
              <div className="first">Number of Positions</div>
              <div className="second">4</div>
            </div>
            <div className="row">
              <div className="first">Operating Supply Voltage</div>
              <div className="second">30 V</div>
            </div>
            <div className="row">
              <div className="first">Orientation</div>
              <div className="second">Right Angle</div>
            </div>
            <div className="row">
              <div className="first">PCB Mounting Orientation</div>
              <div className="second">Right Angle</div>
            </div>
            <div className="row">
              <div className="first">PCB Mount Retention</div>
              <div className="second">With</div>
            </div>
            <div className="row">
              <div className="first">Sealable</div>
              <div className="second">No</div>
            </div>
            <div className="row">
              <div className="first">Shielding</div>
              <div className="second">Shielded</div>
            </div>
            <div className="row">
              <div className="first">Termination</div>
              <div className="second">Solder</div>
            </div>
          </div>
          <div className="table">
            <div className="header">Dimensions</div>
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
          <div className="table">
            <div className="header">Compliance</div>
            <div className="row">
              <div className="first">ELV</div>
              <div className="second">Compliant</div>
            </div>
            <div className="row">
              <div className="first">Flammability</div>
              <div className="second">UL 94 V-0</div>
            </div>
            <div className="row">
              <div className="first">Radiation Hardening</div>
              <div className="second">No</div>
            </div>
            <div className="row">
              <div className="first">REACH SVUC</div>
              <div className="second">Unknown</div>
            </div>
            <div className="row">
              <div className="first">RoHS</div>
              <div className="second">Compliant</div>
            </div>
          </div>
        </>
      )}
      {tab === 1 && (
        <div className="info">
          <div className="row">
            <div className="text">
              Conn Shielded Miniature Circular DIN F 4 POS Solder RA Thru-Hole 4
              Terminal 1 Port Tube
            </div>
          </div>
          <div className="row">
            <div className="text">
              Circular DIN Connector, 4 Contact(s), Female, Board Mount, Solder
              Terminal, Receptacle
            </div>
          </div>
          <div className="row">
            <div className="text">
              Audio/Video Connector; Connector Type:DIN Audio; Connector
              Color:Black; Contact Plating:Gold; Connector Body
              Material:Thermoplastic; Color:Black; Connector Mounting:PC Board;
              Connector Type:DIN Audio ;RoHS Compliant: Yes
            </div>
          </div>
          <div className="row">
            <div className="text">
              CONNECTOR, DIN, JACK, 4 POSITION; No. of Contacts: 4Contacts;
              Gender: Jack; Connector Mounting: PCB Mount; Contact Plating: Gold
              Plated Contacts; Connector Body Material: Plastic Body; Product
              Range: -; Colour: Black; Connector Colour: Black
            </div>
          </div>
          <div className="row">
            <div className="text">
              CONNECTOR, MINI DIN AUDIO, RCPT, 4WAY; C; CONNECTOR, MINI DIN
              AUDIO, RCPT, 4WAY; Connector Type:DIN Audio; Series:-; No. of
              Contacts:4; Gender:Jack; Connector Color:Black; Contact
              Termination:Through Hole Right Angle; Contact Plating:Gold;
              Connector Mounting:PCB; Color:Black
            </div>
          </div>
          <div className="row">
            <div className="text">
              Mini DIN, 4 pos, R/A, Shield Circular DIN Connector Type: Mini DIN
              Connector System: Wire-to-Board Number of Positions: 4 Connector
              Contact Load Condition: Fully Loaded Mating Alignment Type: Keyed
              Mini DIN Wire-to-Board 4 Fully Loaded | Din Connector | Part
              Number: 5749230-1 | Internal Number: 5749230-1 | TE Connectivity
            </div>
          </div>
        </div>
      )}
      {tab === 2 && (
        <div className="images">
          <img src={image} />
          <div className="imgs">
            {images.map((item, index) => (
              <img
                key={item.tab}
                src={item.image}
                className={imgTab === item.tab ? 'active' : ''}
                onClick={() => SelectImage(item)}
              />
            ))}
          </div>
        </div>
      )}
      {tab === 3 && (
        <>
          <div className="table">
            <div className="header">Molex</div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">3 pages</div>
              </div>
            </div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">1 page</div>
                <div className="text">9 years ago</div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="header">Master Electronics</div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">4 pages</div>
                <div className="text">11 years ago</div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="header">RS (Formerly Allied Electronics)</div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">1 page</div>
                <div className="text">3 years ago</div>
              </div>
            </div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">1 page</div>
                <div className="text">3 years ago</div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="header">Newark</div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">1 page</div>
                <div className="text">4 years ago</div>
              </div>
            </div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">1 page</div>
                <div className="text">6 years ago</div>
              </div>
            </div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">1 page</div>
                <div className="text">11 years ago</div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="header">Upverter</div>
            <div className="row">
              <div className="first">
                <div className="btn">
                  <div className="text">Datasheet</div>
                  <div className="icon">
                    <DownloadIcon />
                  </div>
                </div>
              </div>
              <div className="second">
                <div className="text">2 pages</div>
                <div className="text">5 years ago</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductModal
