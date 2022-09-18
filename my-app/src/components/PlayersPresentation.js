import React from 'react'

export default function PlayersPresentation({playerp}) {
 console.log(playerp);
    return (
        <div className='container'>
        {playerp.map((player)=>(
        <div className='column'>
        <div className='card'>
        <img src={player.img} alt='pic'/>
          <h3>{player.name}</h3>
          <p className='title'>{player.club}</p>
          <p><button>Detail</button></p>
        </div>
      </div>
     ))}</div>   

    )
  }

