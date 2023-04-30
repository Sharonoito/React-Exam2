import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${(props) => {
    if (props.status === 'success') {
      return 'green';
    } else if (props.status === 'warning') {
      return 'yellow';
    } else if (props.status === 'error') {
      return 'red';
    } else {
      return 'white';
    }
  }};
`;