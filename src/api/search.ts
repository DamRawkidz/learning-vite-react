import { Place } from "./Place"

interface SearchReseult {
    features: {
        geometry: {
            coordinates: number[]
        },
        properties: {
            place_id: number,
            display_name: string
        }
    }[]
}

export const search = async (term: string) => {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetail=1&layer=address&limi=5`
    )

    const data: SearchReseult  = await res.json()

    const places: Place[] = data.features.map((feature) => {
        return {
            id: feature.properties.place_id,
            name: feature.properties.display_name,
            longitude: feature.geometry.coordinates[0],
            latiitude: feature.geometry.coordinates[1]
        }
    })

    return places;
}
