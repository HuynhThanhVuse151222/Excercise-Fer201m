import './App.css';
import Footer from './components/Footer';

import Main2 from './components/Main2';
import Navigation from './components/Navigation';

function WebFilms() {
    return (
      <div className="WebFilms">
       <Navigation/> 
       <Main2/>
     <Footer/>
      </div>
    );
  }
  
  // class Content extends React.Component{
  //   componentWillMount(){
  //     console.log()
  //   }
  // }
  export default WebFilms;