import {Component} from 'react'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'
import LanguageChanger from './context/LanguageChanger'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    return (
      <LanguageChanger.Provider
        value={{activeLanguage, changeLanguage: this.changeLanguage}}
      >
        <Header />
        <LandingSection />
        <FeaturesSection />
      </LanguageChanger.Provider>
    )
  }
}

export default App
