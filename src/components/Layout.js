import React from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <div className="App">
      <Header />

      <main className="Main">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;