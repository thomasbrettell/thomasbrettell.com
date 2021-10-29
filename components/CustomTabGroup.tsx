import styled, {css} from 'styled-components';
import {Card} from '@geist-ui/react';
import {FC} from 'react';

const Tabs = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

interface TabButtonProps {
  selected?: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  appearance: none;
  background: white;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid #eaeaea;
  cursor: pointer;
  margin-bottom: -1px;
  padding: 5px 15px;
  transition: filter 0.1s ease-in-out;

  ${(props) =>
    !props.selected &&
    css`
      background: #fafafa;

      &:focus {
        filter: brightness(0.98);
      }

      &:hover {
        filter: brightness(0.98);
      }
    `}

  ${(props) =>
    props.selected &&
    css`
      border-bottom: 1px solid white;
    `}
`;

const TabContainer: FC = ({children}) => {
  return (
    <Card style={{overflow: 'hidden', backgroundColor: '#fafafa'}}>
      {children}
    </Card>
  );
};

export {TabContainer, Tabs, TabButton};
