import { ReactFragment } from 'react';
import styled from 'styled-components';
import { BasePage } from '../../layouts/BasePage';


export const ProfilePageContainer = styled(BasePage)` `;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.proporcion === '1/2' ? '1fr 2fr' : '1fr 1fr')};
`
export const LeftDiv = styled.div``
export const RightDiv = styled.div`

`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  font-size: 29px;
  margin-top: 10px;
`
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 25px;
  font-size: ${props => props.bigText ? '24px' : '16px'};

  .bigText {
    font-size: 24px;
    font-weight: bold;
  }

  .smallText {
    font-size: 12px;
    margin-top: 10px;
  }
`

export const RigthButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  
  button{
    margin-left: 10px;
  }
`



