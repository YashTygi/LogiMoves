import React from 'react'
import './GodownListTab.css'

const data = [
  {
    id: 1,
    header: "Warehouse 1",
    address: "123 Main St, Anytown, USA",
    features: ["24/7 Security", "Climate Controlled", "Dock Access"],
  },
  {
    id: 2,
    header: "Warehouse 2",
    address: "456 Maple Ave, Anytown, USA",
    features: ["Gated Entry", "Fire Suppression System", "Sprinklered"],
  },
  {
    id: 3,
    header: "Warehouse 3",
    address: "789 Oak St, Anytown, USA",
    features: ["Fenced Yard", "Paved Lot", "Drive-in Door"],
  },
  {
    id: 4,
    header: "ABC Warehouse",
    address: "123 Main St, Anytown, USA",
    features: ["24/7 security", "Climate control", "Loading dock"]
  },
  {
    id: 5,
    header: "XYZ Warehouse",
    address: "456 Elm St, Anytown, USA",
    features: ["Forklifts available", "Pallet racking", "Flexible lease terms"]
  },
  {
    id: 6,
    header: "123 Warehouse",
    address: "789 Oak St, Anytown, USA",
    features: ["Cross-docking services", "On-site office space", "Rail access"]
  },
  {
    id: 7,
    header: "ABC Warehouse",
    address: "123 Main St, Anytown, USA",
    features: ["24/7 security", "Climate control", "Loading dock"]
  },
  {
    id: 8,
    header: "XYZ Warehouse",
    address: "456 Elm St, Anytown, USA",
    features: ["Forklifts available", "Pallet racking", "Flexible lease terms"]
  },
  {
    id: 9,
    header: "123 Warehouse",
    address: "789 Oak St, Anytown, USA",
    features: ["Cross-docking services", "On-site office space", "Rail access"]
  }
];

const GodownListTab = () => {
  return (
    // <div className='godown_list'>
    //  <div className='godown_card'>
    //   <div className='godown_card_content'>
    //    <h1>Shreejee Warehouse</h1>
    //    <p>Plot No - 3,4 &5 H.K.Ind.Zone, Satada 
    //    Road opp. Kuvadava GIDC, Rajkot GUJARAT PINCODE-360005</p>
    //    <p>Capacity: 9000</p>
    //    <p>Type of goods</p>
    //    <ul>
    //     <li>Loading Facilities</li>
    //     <li>Security</li>
    //     <li>Temperature Control</li>
    //    </ul>
    //    <div>
    //     <button>More Info</button>
    //     <button>Book</button>
    //    </div>
    //   </div>
    //  </div>
    //  <div className='godown_card'>
    //   <div className='godown_card_content'>
    //    <h1>Central Warehousing Corporation</h1>
    //    <p>Hardoi Lucknow Road, 
    //    Opp. 132 KV Power Station, Hardoi UTTAR PRADESH 
    //    PINCODE-226016</p>
    //    <p>Capacity: 3800</p>
    //    <p>Type of goods</p>
    //    <ul>
    //     <li>Loading Facilities</li>
    //     <li>Security</li>
    //     <li>Temperature Control</li>
    //    </ul>
    //    <div>
    //     <button>More Info</button>
    //     <button>Book</button>
    //    </div>
    //   </div>
    //  </div>
    //  <div className='godown_card'>
    //   <div className='godown_card_content'>
    //    <h1>CW Ongole Central Warehouse</h1>
    //    <p> Throvagunta P.O. Ongole Prakasam ANDHRA PRADESH PINCODE-523262</p>
    //    <p>Capacity:  10000</p>
    //    <p>Type of goods</p>
    //    <ul>
    //     <li>Loading Facilities</li>
    //     <li>Security</li>
    //     <li>Temperature Control</li>
    //    </ul>
    //    <div>
    //     <button>More Info</button>
    //     <button>Book</button>
    //    </div>
    //   </div>
    //  </div>
    // </div>
    <div className="godown_list">
      {data.map((item) => (
        <div className="godown_card" key={item.id}>
          <h2>{item.header}</h2>
          <p>{item.address}</p>
          <ul>
            {item.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="godown-btn">
            <button className="button">Book Now</button>
            <button className="button">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GodownListTab