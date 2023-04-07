/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaHandsHelping,
} from 'react-icons/fa';
import { HiClipboardDocumentList } from 'react-icons/hi2';

const StyledFooter = styled.div`
  background-color: none;
  border-top: 1px solid #cce;
  color: #fff;
  margin: 2rem auto 1rem;
  width: 97%;
  max-width: 1400px;
  height: fit-content;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 10px;

  p {
    width: fit-content;
    display: flex;
    align-items: flex-end;
    gap: 5px;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 30px 10px;
    min-height: unset;
  }
`;

export default function Footer() {
  const navigate = useNavigate();
  return (
    <StyledFooter className="footer" id="footer">
      <p
        className="getkey_btn"
        type="button"
        onClick={() => navigate('/apipage')}
      >
        <FaHandsHelping />
        Get an API
      </p>

      <p onClick={() => window.open('http://localhost:3000/api-docs/')}>
        <HiClipboardDocumentList /> API docs
      </p>

      <p>
        <FaTwitter /> Twitter
      </p>
      <p>
        <FaFacebook /> Facbook
      </p>
      <p>
        <FaInstagramSquare /> Instagram
      </p>
    </StyledFooter>
  );
}
