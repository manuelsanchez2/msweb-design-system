import { render, screen, within } from '@testing-library/svelte'
import Grid from './Grid.svelte'

describe('Grid', () => {
  test('should render the component Grid to the page', async () => {
    render(Grid, { name: 'world', elements: ['a', 'b', 'c'] })
    const grid = screen.getByTestId('grid')

    expect(grid).toBeDefined()
  })

  test('should display the same number of elements as the elements prop', async () => {
    render(Grid, { name: 'world', elements: ['a', 'b', 'c'] })
    const grid = screen.getByTestId('grid')
    const children = within(grid).getAllByRole('listitem')

    expect(children).toHaveLength(3)
  })
})
