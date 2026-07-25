import React from 'react';

function ListofPlayers(props) {
  const players = props.players;
  return(
    players.map((item)=>
    {
    return(
      <div>
        <li>Mr. {item.name}<span> {item.score} </span></li>
      </div>

    )})
  )
}

export default ListofPlayers;