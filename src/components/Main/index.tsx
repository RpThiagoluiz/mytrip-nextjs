import * as S from './styles'
//Assim, de olhar vc ja sabe q isso é um component de stylo.

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atamo e React Avancando escrito ao lado"
    />
    <S.Title>React Avancado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com codigo."
    />
  </S.Wrapper>
)

export default Main
