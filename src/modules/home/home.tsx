import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './features/banner'
import Branding from './features/branding'
import Benefits from './benefits'
import FeatureHighlight from './features/feature.highlight'
import Pricing from './features/pricing'

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
      <Pricing />
    </div>
  )
}

export default Home;