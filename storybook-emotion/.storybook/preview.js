import React from 'react'
import { GlobalStyles, theme } from 'twin.macro'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
}

export const decorators = [
  Story => (
    <div>
      {/* */}
      <GlobalStyles />
      <Story />
    </div>
  ),
]
