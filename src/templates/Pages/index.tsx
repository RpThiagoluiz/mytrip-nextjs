import { LinkWrapper } from 'components/LinkWrapper'
import React from 'react'
import * as S from './styles'
import { CloseSquareOutline } from '@styled-icons/evaicons-outline/'

export type PageTemplateProps = {
  heading: string
  body: string
}

//O leaflet precisa do dinamic, para isso precisamos utilizar ele pela doc do nextjs/dynamic
//getStaticPaths => server para gerar as urls em build time /about/trip/petropolis
//getStaticProps => serve para buscar os dados para construir as paginas. -Build time-> estatico
//getServerSideProps => server para buscar os dados tbm, so que ele roda em run time, toda vez q tiver uma request ele vem
//getrInitialProps => server para buscar dadps da pagina(props) - run time - toda request (bundle tbm vem para o client) -hydrate, contudo ele pouco recomendado.

export const PagesTemplate = ({ body, heading }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseSquareOutline size={32} />
    </LinkWrapper>
    <S.Heading>{heading.toUpperCase()}</S.Heading>
    <S.Body>
      {/* dangerouslySetInnerHTML -> para ele nao vim com script, avisa o next. */}
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)
