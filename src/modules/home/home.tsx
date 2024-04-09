import Header from '@/shared/widgets/header/header'
import React from 'react'
import Banner from './elements/banner'
import Branding from './elements/branding'
import Benefits from './elements/benefits'
import FeatureHighlight from './elements/feature.highlight'
import Pricing from './elements/pricing'
import Footer from '@/shared/widgets/footer'

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
      <Footer/>
    </div>
  )
}

export default Home;