import Heart from './Heart';

export default {
    title: 'Heart',
    component: Heart,
    parameters: {
        docs: {
          description: {
            component: 'a heart that can be selected'
          },
        },
      },
    argTypes: {
        onClick: { action: 'clicked' },
        selected: {
            control: 'boolean',
            defaultValue: false,
        },
    tesdId: {
        control: 'text',
        defaultValue: 'heart',
    },
    },
};

const style = {
    width: '100px',
    display: 'flex',
}
const Template = (args) => (
    <div className='storybook-wrapper'>
        <Heart {...args} />
    </div>
);

export const Default = Template.bind({});