import styled from 'styled-components';
import Image from 'next/image';
import Football from '@/app/ui/assets/football.svg';
import Basketball from '@/app/ui/assets/basketball.svg';
import Tennis from '@/app/ui/assets/tennis.svg';
import DateTime from '../lib/DateTime';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectSportProgram } from '@/app/stores/store';
import { fetchData } from '@/app/services/requests';

const MenuWrapper = styled.section`
  background-color: #192125;
  color: #FFFFFF;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  height: 50px;
`;

const MenuItem = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;

  li {
    height: 100%;
    display: flex;
    align-items: center;

    a {
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 15px;
      gap: 5px;

      &:hover {
        background-color: #384750;
      }

      &.active {
        background-color: #384750;
      }
    }
  }
`;

export default function Menu() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path ? "active" : "";
  const dispatch = useDispatch();

  const handleFetchData = async (id) => {
    const data = await fetchData(id);
    if (data) {
      dispatch(selectSportProgram(data));
    }
  };

  useEffect(() => {
    handleFetchData(1);
  }, []);

  return (
    <MenuWrapper>
      <Container>
        <MenuItem>
          <li>
            <Link
              href="/program/futbol"
              className={isActive("/program/futbol")}
              onClick={() => handleFetchData(1)}>
              <Image src={Football} width={20} height={20} alt="Football" />
              Futbol
            </Link>
          </li>
          <li>
            <Link
              href="/program/basketbol"
              className={isActive("/program/basketbol")}
              onClick={() => handleFetchData(2)}>
              <Image src={Basketball} width={20} height={20} alt="Basketball" />
              Basketbol
            </Link>
          </li>
          <li>
            <Link
              href="/program/tenis"
              className={isActive("/program/tenis")}
              onClick={() => handleFetchData(5)}>
              <Image src={Tennis} width={20} height={20} alt="Tennis" />
              Tenis
            </Link>
          </li>
        </MenuItem>
        <DateTime />
      </Container>
    </MenuWrapper>
  );
}