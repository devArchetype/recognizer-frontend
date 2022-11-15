import styled from "styled-components";
import { screens } from "../../../styles/global";

export const DefaultLayoutContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`

export const LayoutSchema = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: hidden;

  @media ${screens.sm} {
    flex-direction: row;
  }
`

export const PageContainer = styled.div`
  min-height: 0;
  flex: 1;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
`