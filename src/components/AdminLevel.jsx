/* eslint-disable react/prop-types */
import React from 'react';
import { TiLockOpen } from 'react-icons/ti';

export default function AdminLevel({ currentUser, fetchedData }) {
  const [myStats, setMyStats] = React.useState({
    Drinks: 0,
    Categories: 0,
    Ingredients: 0,
  });

  const date = new Date();

  console.log('currentUser.joined since', currentUser?.joinedSince, date);

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
    <p>
      Level{' '}
      {myStats.Drinks > 9 && (
        <TiLockOpen className="open_lock" title="your level as an admin" />
      )}
    </p>
  );
}
