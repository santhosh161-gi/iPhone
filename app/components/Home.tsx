import React from 'react'
import Navbar from './Nav/Navbar'
import MainPage from './Main/MainPage'
import Explorelinup from './Explore/Explorelinup'
import GuidedLook from './Guided/GuidedLook'
import Buy from './BuyIphone/Buy'
import Know from './KnowIphone/Know'
import Access from './Essentials/Access'
import ExploreDetails from './ExploreAll/ExlporeDetails'
import FooterLine from './Footer/FooterLine'
const HomePage = () => {
  return (
    <div className='overflow-hidden h-full'>
      <MainPage/>
      <Explorelinup/>
      <GuidedLook/>
      <Buy/>
      <Know/>
      <Access/>
      <ExploreDetails/>
      <FooterLine/>
    </div>
  )
}

export default HomePage