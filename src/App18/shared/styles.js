import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${props => props.backgroundColor};
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #130046;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    margin: 0px 16px;
    font-family: praxis-next, sans-serif;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
  }

  h2 {
    font-size: 15px;
    color: #fff;
    font-weight: bold;
    line-height: 1.5;
    font-family: praxis-next, sans-serif;
    margin-right: 20px;
  }
`

export const ContentWrapper = styled.div`
  padding: 20px 40px;
`

export const CatsAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;

  img {
    margin-top: 40px;
    height: 100%;
  }
`

export const IconWrapper = styled.div`
  svg {
    font-size: 20px;
    color: ${props => props.color};
  }
`

export const GetCatButton = styled.button`
  border: 0;
  font-size: 20px;
  border-radius: 12px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #ff7435;
  color: ${props => props.textColor};
  padding: 10px;
  cursor: pointer;
`
