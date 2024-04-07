import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './features/banner'
import Branding from './features/branding'
import Benefits from './benefits'
import FeatureHighlight from './feature.highlight'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      {/* FREE trial card pending */}
      <FeatureHighlight />
    </div>
  )
}

export default Home;