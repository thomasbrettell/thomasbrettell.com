import {FC} from 'react';
import styled from 'styled-components';
import MainWrapper from './MainWrapper';
import {Link, Text} from '@geist-ui/react';
import {email, linkedInLink, gitHubLink} from '../constants';

const Box = styled.footer`
  position: relative;
  padding: 15px 0;

  &:before {
    position: absolute;
    content: '';
    height: 1px;
    left: 0px;
    right: 0px;
    top: 0px;
    background-color: var(--border-grey);
  }
`;

const Footer: FC = () => {
  return (
    <Box>
      <MainWrapper>
        <Link href={`mailto:${email}`} target='_blank' underline>
          <Text span font='12px' style={{marginRight: '10px', cursor: 'ne-resize'}}>
            EMAIL
          </Text>
        </Link>
        <Link href={linkedInLink} target='_blank' underline>
          <Text span font='12px' style={{marginRight: '10px', cursor: 'ne-resize'}}>
            LINKEDIN
          </Text>
        </Link>
        <Link href={gitHubLink} target='_blank' underline>
          <Text span font='12px' style={{marginRight: '10px', cursor: 'ne-resize'}}>
            GITHUB
          </Text>
        </Link>
      </MainWrapper>
    </Box>
  );
};

export default Footer;
