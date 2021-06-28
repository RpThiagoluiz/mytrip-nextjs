import client from 'graphql/client'
import { useRouter } from 'next/router'
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphql/queries'
import { PagesTemplate, PageTemplateProps } from 'templates/Pages'
import { GetStaticProps } from 'next'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // Se houver fallback, pode retonar alguma mensagem ate ela carregar.
  if (router.isFallback) return null

  //antes de retornar nos precisamos verificar se as paginas vieram.
  return <PagesTemplate heading={heading} body={body} />
}

//Slugs - trabalha junto com as props. para criar rotas dinamicas.
export async function getStaticPaths() {
  //essa tipagem veio com o codegen
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => ({ params: { slug } }))
  //bom limitar, pra nao gerar todas a paginas de uma vez so.
  //aqui ele vai gerar 3 urls, de pois ele vem passando o fallback e chamas as paginas
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //to indo graphCMS pegando os dados da pagina e montando ela aqui.
  //Essa tipagem gera de acordo com o nosso backend.
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGES_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
