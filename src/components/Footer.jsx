import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/arturlemesmoretti/">LinkedIn</a>
        <a href="https://github.com/arturLMoretti">Github</a>
        <a
          className="btn btn-primary btn-floating m-1"
          style={{ backgroundColor: '#333333' }}
          href="https://github.com/arturLMoretti"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />

        </a>
      </div>
      Artur Lemes Moretti
    </footer>
  );
}

export default Footer;
