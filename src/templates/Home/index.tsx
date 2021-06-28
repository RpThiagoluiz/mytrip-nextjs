import dynamic from 'next/dynamic'
import { LinkWrapper } from 'components/LinkWrapper'
//Export tem que ser default da pagina
const Map = dynamic(() => import('components/Map'), { ssr: false })
import { BookInformation } from '@styled-icons/fluentui-system-regular/BookInformation'
import { MapProps } from 'components/Map'

//O leaflet precisa do dinamic, para isso precisamos utilizar ele pela doc do nextjs/dynamic
//getStaticPaths => server para gerar as urls em build time /about/trip/petropolis
//getStaticProps => serve para buscar os dados para construir as paginas. -Build time-> estatico
//getServerSideProps => server para buscar os dados tbm, so que ele roda em run time, toda vez q tiver uma request ele vem
//getrInitialProps => server para buscar dadps da pagina(props) - run time - toda request (bundle tbm vem para o client) -hydrate, contudo ele pouco recomendado.

export const HomeTemplate = ({ places }: MapProps) => {
  return (
    <>
      <LinkWrapper href="/about">
        <BookInformation size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
