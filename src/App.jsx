import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing page/LandingPage'
import FeaturedList from './pages/featured page/FeaturedList'
import PropertiesPage from './pages/properties page/PropertiesPage'
import PropOverviewPage from './pages/prop overview page/PropOverviewPage'
import Profile from './pages/profile/Profile'
import PostPropertyPage from './pages/post property/PostPropertyPage'
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/Signin'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/featured' element={<FeaturedList />} />
        <Route path='/properties' element={<PropertiesPage />} />
        <Route path='/overView' element={<PropOverviewPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/post-property' element={<PostPropertyPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App