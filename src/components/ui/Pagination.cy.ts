import Pagination from './Pagination.vue'

describe('<Pagination />', () => {
  it('renders', () => {
    cy.mount(Pagination, {
      props: {
        itemsPerPage: 10,
        total: 100,
      },
    })

    cy.get('nav').should('exist')
    cy.get('button').should('have.length', 10)
  })

  it('emits a page event', () => {
    cy.mount(Pagination, {
      props: { itemsPerPage: 10, total: 100 },
    })

    cy.get('button').eq(0).should('be.disabled')
    cy.get('button').eq(2).click()
    cy.get('button').eq(2).invoke('attr', 'aria-current').should('equal', 'page')
    cy.get('button').eq(0).should('be.enabled')
  })

  it('updates the model', () => {
    cy.mount(Pagination, {
      props: { itemsPerPage: 10, total: 100, modelValue: 2 },
    })

    cy.get('button').eq(2).invoke('attr', 'aria-current').should('equal', 'page')
  })
})
