import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="imagem de um átomo" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, React JS, NextJS e Styled Components
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustation.png"
      alt="Um desenvolvedor de frente para a tela com código."
    />
  </S.Wrapper>
)

export default Main
