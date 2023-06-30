import React, { useContext, useEffect } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state, setData } = useContext(ContextGlobal);
 
  return (
    <main className={`root ${state.theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentistas.map(dentista => (
          <div key={dentista.id}>
              <Card name={dentista.name} username={dentista.username} id={dentista.id} />
          </div>
        ))}
      </div>
    </main>
  )
};

export default Home;