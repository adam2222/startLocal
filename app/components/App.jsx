
import React from 'react';
import Header from './Header';
// import Footer from './Footer'


export default function App (props) {
  return (
    <div>
      <Header />
      <div className="container">
        {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
    </div>
  )
}

// <Footer />
