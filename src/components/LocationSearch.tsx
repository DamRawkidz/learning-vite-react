import React, { Fragment, useState } from "react"
import { Place } from "../api/Place"
import { search } from "../api/search"

interface LocationSearchProps {
    onplaceClick: (place: Place) => void
}

export default function LocationSearch({ onplaceClick }:LocationSearchProps ){
    const [term, setTerm] = useState<string>('')
    const [places, setPlace] = useState<Place[]>([])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const result =  await search(term)
        setPlace(result)
    }


    return <div>
        <form onSubmit={handleSubmit}>
            <label className="font-bold" htmlFor="term">
                Search
            </label>
            <input id="term" className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full" 
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
        </form>

        <h1 className="font-bold mt-6">Found Locations</h1>
        <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
            {
                places.map(place => {
                    return <Fragment key={place.id}>
                        <p className="text-sm">{place.name}</p>
                        <button onClick={() => onplaceClick(place)} className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded">
                            Go
                        </button>
                        <div className="boder-p w-full col-span-2"></div>
                    </Fragment>
                })
            }
        </div>
    </div>
    
}