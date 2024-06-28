
import { useState } from 'react'
import './App.css'
import LocationSearch from './components/LocationSearch'
import Map from './components/Map'
import { Place } from './api/Place'

function App() {
  const [place, setPlace] = useState<Place | null>(null)

  return <div className="h-screen w-screen grid grid-cols-12">
    { place?.name }
    <div className='col-span-3 p-2'>
      <LocationSearch onplaceClick={(p) => setPlace(p)} />
    </div>
    <div className='col-span-9'>
      <Map place={place}/>
    </div>
  </div>
}

export default App
