import List from './List';



const mockedItem = [
    {
    id: 1,
    name: "bulbassaur",
    sprites: {
        other: {
            'official-artwork': {
                front_default: ''
            },
        },
    },
    },
    {
        id: 2,
        name: "ivsaur",
        sprites: {
            other: {
                'official-artwork': {
                    front_default: ''
                },
            },
        },
    }

]

describe('List', ()=> {
    it('should render correctly', ()=> {
        cy.mount(<List />);
        cy.get('[data-testid="list"]').should('be.visible');
    });

    it('should render items correctly', ()=> {
        cy.mount(<List items={mockedItem} />);
        cy.get('[data-testid="list"]').should('be.visible');
        cy.get('[data-testid="list-item-1"]').should('be.visible');
        cy.get('[data-testid="list-item-2"]').should('be.visible');
    })    
})