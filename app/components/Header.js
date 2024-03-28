import styled from 'styled-components';
import Image from 'next/image';
import Logo from '@/app/ui/assets/logo.svg';
import Menu from './Menu';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  background-color: #008641;
  color: #1D2225;
  height: 52px;
  padding: 10px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const AuthButton = styled.button`
  width: 80px;
  height: 32px;
  color: #1D2225;
  font-weight: bold;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  ${(props) => props.login ? 'background-color: #F3E300;' : 'background-color: #fff;'}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default function Header() {
  return (
    <>
    <HeaderWrapper>
      <Container>
        <Link href="/">
          <Image
            src={Logo}
            width={110}
            height={35}
            alt="Logo"
            />
        </Link>
        <ButtonContainer>
          <AuthButton login={"true"}> Giriş </AuthButton>
          <AuthButton> Üye Ol </AuthButton>
        </ButtonContainer>
      </Container>
      </HeaderWrapper>
      <Menu />
    </>
  );
}