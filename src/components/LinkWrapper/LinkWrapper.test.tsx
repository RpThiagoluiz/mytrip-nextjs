import { render, screen } from '@testing-library/react'
import { LinkWrapper } from '.'

describe('<LinkWrapper/>', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/Mylink">Anything</LinkWrapper>)
    const children = screen.getByText(/anything/i)
    //const children = screen.getByRole('link', {name: /anything/i})

    expect(children).toBeInTheDocument()
    //Children tenha um atributo, nome do atributo, e o que contem dentro dele.
    expect(children).toHaveAttribute('href', '/Mylink')
  })
})
