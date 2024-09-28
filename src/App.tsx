import React from 'react';

const App: React.FC = () => {
  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">My Deezer Client</p>
          <p className="subtitle">Using React, Electron, and Bulma</p>
        </div>
      </section>

      <div className="section">
        <div className="columns">
          <div className="column is-half">
            <button className="button is-primary">Primary Button</button>
          </div>
          <div className="column is-half">
            <button className="button is-danger">Danger Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
