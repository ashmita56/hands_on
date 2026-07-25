import React from 'react';
import officeImage from './office.jpg';
import './App.css';

const officeList = [
  { Name: "DBS", Rent: 50000, Address: 'Chennai' },
  { Name: "WeWork", Rent: 75000, Address: 'Bangalore' },
  { Name: "Regus", Rent: 45000, Address: 'Hyderabad' },
  { Name: "IndiQube", Rent: 68000, Address: 'Mumbai' }
];

function App() {
  const element = "Office Space";
  const jsxatt = <img src={officeImage} width="25%" height="25%" alt="Office Space"/>;
  const ItemName = {Name:"DBS", Rent: 50000, Address:'Chennai'};

  let colors=[];
  if(ItemName.Rent<=60000)
  {
    colors.push('textRed');
  }
  else{
    colors.push('textGreen');
  }

  return (
    <div className="App">
      <h1>{element} , at Affordable Range </h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors[0]}> Rent: Rs. {ItemName.Rent}</h3>
      <h3> Address: {ItemName.Address}</h3>

      <hr/>
      <h1>All Available Offices</h1>
      {officeList.map((item, index) => {
        let listColors = [];
        if (item.Rent <= 60000) {
          listColors.push('textRed');
        } else {
          listColors.push('textGreen');
        }

        return (
          <div key={index}>
            <h2>Name: {item.Name}</h2>
            <h3 className={listColors[0]}> Rent: Rs. {item.Rent}</h3>
            <h3> Address: {item.Address}</h3>
            <hr/>
          </div>
        );
      })}
    </div>
  );
}

export default App;