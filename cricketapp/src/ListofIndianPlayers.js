import React from 'react';

function ListofIndianPlayers(props) {
  const IndianPlayers = props.IndianPlayers;
  return(
    IndianPlayers.map((item)=>
    {
    return(
      <li>Mr. {item}</li>
    )})
  )
}

export default ListofIndianPlayers;