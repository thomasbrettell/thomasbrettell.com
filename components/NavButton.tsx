import styled from 'styled-components';
import {FC} from 'react';
import Link from 'next/link';

const Underline = styled.span`
  &:after {
    content: '';
    display: block;
    height: 2px;
    background-color: black;
    width: 0%;
    transition: .25s ease-in-out;
  }
`;

const NavLink = styled.a`
  width: 100%;
  height: 100%;
  color: black;

  &:hover {
    ${Underline} {
      &:after {
        width: 100%;
      }
    }
  }
`;

const Card = styled.div`
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-grey);
`;

interface NavButtonProps {
  href: string;
}

const NavButton: FC<NavButtonProps> = ({children, href}) => {
  return (
    <Link href={href} passHref>
      <NavLink>
        <Card>
          <Underline>{children}</Underline>
        </Card>
      </NavLink>
    </Link>
  );
};

export default NavButton;
