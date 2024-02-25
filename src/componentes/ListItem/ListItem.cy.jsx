import ListItem from './ListItem';

const mockedItem = {
    id: 1,
    name: "bulbassaur",
    sprites: {
        other: {
            'official-artwork': {
                front_default: ''
            },
        },
    },
}


describe('ListItem', ()=> {
    it('should render correctly', ()=> {
        cy.mount(<ListItem item={mockedItem}/>);
        cy.get('[data-testid="list-item-1"]').should('be.visible');
    });
});