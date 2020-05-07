import React from 'react';

function Footer() {
  return (
    <footer className="Footer">
      <div className="bg-dark text-center p-3">
        <p className="text-light small mb-0">
          &copy; {new Date().getFullYear()} Copyright by Sonjoy Datta.
        </p>
      </div>
    </footer>
  );
}

export default Footer;