import React from 'react';
import HomeFeatured from './HomeFeatured';

// LOCAL IMPORTS
import HomeLanding from './HomeLanding';
import HomeOurRecommendation from './HomeOurRecommendation';
import HomeTestimonials from './HomeTestimonials';

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <HomeFeatured />
      <HomeOurRecommendation />
      <HomeTestimonials />
    </div>
  )
}

export default Home