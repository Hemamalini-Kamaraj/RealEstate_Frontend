import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TextField from '../../components/textField/TextField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import './postPropertyPage.css'

function PostPropertyPage() {

  return (
    <>
        <Header />
        <div className='postProperty'>
            <h2>Post Property</h2>
            <div className='detailCards'>
                <TextField
                    label="First Name"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter First Name"                        
                />
                <div style={{marginBottom:"60px"}} className='uploadBut'>
                    <button>
                        <FontAwesomeIcon icon={faUpload} />&nbsp;Post
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default PostPropertyPage