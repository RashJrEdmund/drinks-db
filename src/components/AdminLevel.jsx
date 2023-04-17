/* eslint-disable react/prop-types */
import React from 'react';
import { BsStar, BsStarHalf, BsFillStarFill } from 'react-icons/bs';
import styled from '@emotion/styled';

const StledLevel = styled.p`
  span {
    color: #a52a2a;
    cursor: text;
  }
`;

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
    <StledLevel title="be an active member to gain more">
      Level{' '}
      {myStats.Drinks > 9 && (
        <span>
          <BsFillStarFill />
          <BsStarHalf />
          <BsStar className="open_lock" title="your level as an admin" />
        </span>
      )}
    </StledLevel>
  );
}
