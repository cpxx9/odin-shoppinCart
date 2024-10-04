import styled from 'styled-components';

const StyledQuantity = styled.div`
  display: block;
  .main {
    display: flex;
    align-items: center;
    width: 7dvw;

    button {
      border: 1px solid black;
      outline: none;
      font-weight: 900;
    }

    button,
    p {
      flex: 1;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
    }

    .minus {
      border-left: 2px solid black;
      border-radius: 5px 0 0 5px;
    }

    .plus {
      border-right: 2px solid black;
      border-radius: 0 5px 5px 0;
    }

    p {
      flex: 1.2;
      text-align: center;
      box-shadow: inset 1px 0 2px 1px #888;
    }
  }
`;

export default StyledQuantity;
