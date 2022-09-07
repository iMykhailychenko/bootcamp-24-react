import { BiAddToQueue } from 'react-icons/bi';
import styled from 'styled-components';

import { Icon } from './Icon';

const Wrapper = styled.div`
  padding: 10px 20px;
  margin: 20px 0;
  background-color: ${props => (props.online ? 'green' : 'red')};

  p:nth-of-type(1) {
    color: red;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

const isOnline = true;

export const UsersItem = ({ name, email, phone }) => {
  return (
    <Wrapper title="title" online={isOnline}>
      <BiAddToQueue />
      <Icon />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </Wrapper>
  );
};
