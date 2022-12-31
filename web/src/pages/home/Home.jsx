import React from 'react';
import HomeFeatured from './HomeFeatured';

// LOCAL IMPORTS
import HomeLanding from './HomeLanding';
import HomeOurRecommendation from './HomeOurRecommendation';

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <HomeFeatured />
      <HomeOurRecommendation />
    </div>
  )
}

export default Home