import { render, screen } from '@testing-library/react'
import Main from '.'
describe('<Main/>', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()
  })

  it('should be render in Snapshot ', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()

    //Criar uma pasta e dentro dela vai ter o snapshot dela. que vai verificar se ta tudo igual. Caso vc mude alguma coisa dentro ele vai avisar que vc mudou algo dentro do codigo, e vc consegue reverter e\ou autorizar isso msm.
    //Garante uma camada a mais de seguranca - como estamos procurando um reading precisamos dele.
    expect(container.firstChild).toMatchSnapshot()
  })

  //Just for test styled-component
  it('should render colors correctly', () => {
    const { container } = render(<Main />)

    //Verificar todos os estilos, ou pedaco da main tbm.
    //Pode verificar o focus, caso mudou algum stilo quando o usuario focar em input, por exemplo.
    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
