import { render, screen } from '@testing-library/react'
import Map from '.'

describe('Map Component || <Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)

    // screen.logTestingPlaygroundURL()
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker incorrect place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '10',
      name: 'Reykjavik',
      slug: 'reykjavik',
      location: {
        latitude: 150,
        longitude: -10
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Reykjavik/i)).toBeInTheDocument()
  })
})
