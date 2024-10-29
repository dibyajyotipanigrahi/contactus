import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import './App.css'
import BackgroundImage from './component/header'
import WorldMap from './component/map'
import '@fortawesome/fontawesome-free/css/all.min.css';


import FormAndCards from './component/second'

function App() {


  return (
    <>
      <div className='example'>
        <BackgroundImage/>
        <FormAndCards />
        <WorldMap />
        
       </div>
    </>
  )
}

export default App
