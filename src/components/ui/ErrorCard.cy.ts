import ErrorCard from './ErrorCard.vue'

describe('<ErrorCard />', () => {
  it('renders', () => {
    cy.mount(ErrorCard, {
      props: { error: {
        message: 'An error occurred',
      } },
    })

    cy.get('code').should('contain.text', 'An error occurred')
  })
})
