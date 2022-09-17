import React from 'react'
import { Players } from './shared/ListOfPlayers'
// export default class Player extends Component {
//   render() {
//     return (
//         <div className='body'>
//         <div className='container'>
//         <div className='column'> 
//             <div className='card'>
//                 <img src='assets/images/cr.jpg' alt='CR'/>
//                 <h3>Cristiano Ronaldo</h3>
//                 <p className='title'>Manchester United</p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//           <div className='card'>
//               <img src='assets/images/kante.jpg' alt='\Kante'/>
//               <h3>Kante</h3>
//               <p className='title'>Chelsea </p>
//               <p><button>Detail</button></p>
//           </div>
//           </div>
//           <div className='column'>
//           <div className='card'>
//               <img src='assets/images/haaland.jpg' alt='Haaland'/>
//               <h3>Haaland</h3>
//               <p className='title'>Manchester City </p>
//               <p><button>Detail</button></p>
//           </div>
//           </div>
//           <div className='column'>
//           <div className='card'>
//               <img src='assets/images/kane.jpg' alt='Kane'/>
//               <h3>Kane</h3>
//               <p className='title'>Tottenham </p>
//               <p><button>Detail</button></p>
//           </div>
//           </div>
//           <div className='column'>
//           <div className='card'>
//               <img src='assets/images/m.jpg'alt='Mbabape'/>
//               <h3>Mbabape</h3>
//               <p className='title'>PSG</p>
//               <p><button>Detail</button></p>
//           </div>
//           </div>
//           <div className='column'>
//           <div className='card'>
//               <img src='assets/images/messi.jpg' alt='Messi'/>
//               <h3>Messi</h3>
//               <p className='title'>PSG </p>
//               <p><button>Detail</button></p>
//           </div>
//           </div>
//     </div>
//     </div>
//     )
//   }
// }

export default function Players1() {
    return (
    <div className='container'>
      {Players.map((player)=>(
           <div className='column'>
           <div className='card'>
           <img src={player.img} alt='pic'/>
             <h3>{player.name}</h3>
             <p className='title'>{player.club}</p>
             <p><button>Detail</button></p>
           </div>
         </div>    
  ))}
      
      </div>
    )
}

