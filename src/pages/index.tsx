import dynamic from 'next/dynamic'

//Export tem que ser default da pagina
const Map = dynamic(() => import('components/Map'), { ssr: false })

//O leaflet precisa do dinamic, para isso precisamos utilizar ele pela doc do nextjs/dynamic

export default function Home() {
  return <Map />
}
