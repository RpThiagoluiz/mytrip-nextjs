import client from 'graphql/client'
import { useRouter } from 'next/router'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { PlacesTemplate, PlaceTemplateProps } from 'templates/Places'
import { GetStaticProps } from 'next'
import { GetPlaceBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  // Se houver fallback, pode retonar alguma mensagem ate ela carregar.
  if (router.isFallback) return null

  //antes de retornar nos precisamos verificar se as paginas vieram.
  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })
  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
