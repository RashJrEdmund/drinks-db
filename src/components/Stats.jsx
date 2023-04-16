/* eslint-disable react/prop-types */
import React from 'react';
import { TiLockOpen } from 'react-icons/ti';
import FetchHOC from '../HOFs/FetchHOC';
import AdminLevel from './AdminLevel';

function Stats({ fetchedData, currentUser }) {
  const [myStats, setMyStats] = React.useState({
    Drinks: 0,
    Categories: 0,
    Ingredients: 0,
  });

  React.useEffect(() => {
    setMyStats(() => {
      const holder = {
        Drinks: fetchedData.Drinks.filter(
          (drink) => drink.userId === currentUser?.id
        ).length,
        Categories: 0,
        Ingredients: 0,
      };

      return { ...holder };
    });
  }, []);

  return (
    <div className="stats_section">
      <h2>Stats</h2>

      <AdminLevel fetchedData={fetchedData} currentUser={currentUser} />

      <div className="sub_stats">
        <h3>total results</h3>
        {['Drinks', 'Categories', 'Ingredients'].map((item) => (
          <p key={item}>
            {item} : {fetchedData[item].length}
          </p>
        ))}

        <h3>total created</h3>
        <p>
          Drinks: {myStats.Drinks}{' '}
          <TiLockOpen className="open_lock" title="your creation" />
        </p>

        <h3>Rrelated to my Drinks</h3>
        {['Categories', 'Ingredients'].map((item) => (
          <p key={item}>
            {item} {myStats[item]}
          </p>
        ))}

        <h3>joined since: </h3>
        <p>{currentUser.joinedSince}</p>
      </div>
    </div>
  );
}

export default FetchHOC(Stats);
