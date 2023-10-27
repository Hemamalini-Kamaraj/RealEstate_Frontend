import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import sample from '../../Data/sample'
import Card from '../../components/cards/Card'

function PropertiesPage() {
  return (
     <>
        <Header />
        <div className='featuredList'>
              <h2>Properties</h2>
              <div className='listItems'>
                  {sample.map((data) => (
                      <Card data={data} key={data.id} />
                  )
              )}
              </div>
        </div>
        <Footer />
    </>
  )
}

export default PropertiesPage