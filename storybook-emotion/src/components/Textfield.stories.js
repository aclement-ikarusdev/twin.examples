import { Textfield, TextFieldWithStyledInput } from './Textfield'

export default {
  title: 'Textfield',
  component: Textfield,
  argTypes: {
    label: {
      description: 'The label content',
      defaultValue: 'Label',
      type: { name: 'text', required: true },
    },
    placeholder: {
      description: 'The label content',
      defaultValue: 'Label',
      type: { name: 'text', required: true },
    },
  },
}

export const WithoutStyled =  props => <Textfield {...props} />
export const WithStyled =  props => <TextFieldWithStyledInput {...props} />
