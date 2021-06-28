import { MapContainer, TileLayer, Marker } from 'react-leaflet'

interface place {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: place[] //pode ou nao ter places no mapa.
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', widht: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {places?.map(({ id, slug, name, location }) => {
      const { latitude, longitude } = location
      console.log(slug)

      return (
        <Marker
          key={`place-${id}`}
          position={[latitude, longitude]}
          title={name}
        ></Marker>
      )
    })}
  </MapContainer>
)

export default Map
