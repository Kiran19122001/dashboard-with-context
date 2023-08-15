import React from 'react'

const LanguageChanger = React.createContext({
  activeLanguage: 'EN',
  changeLanguage: () => {},
})

export default LanguageChanger
