import Input from './Input.vue'

describe('<Input />', () => {
  it('renders', () => {
    cy.mount(Input)

    cy.get('input').should('exist')
  })

  it('emits an input event', () => {
    cy.mount(Input)

    cy.get('input').type('Hello, World!')
    cy.get('input').should('have.value', 'Hello, World!')
  })

  it('updates the model', () => {
    cy.mount(Input, {
      props: {
        modelValue: 'Hello, World!',
      },
    })

    cy.get('input').should('have.value', 'Hello, World!')
  })
})
