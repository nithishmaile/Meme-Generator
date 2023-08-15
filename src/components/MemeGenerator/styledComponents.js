// Style your components here

import styled from 'styled-components'

export const LabelParagraph = styled.label`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-family: Roboto;
  padding-bottom: 5px;
  margin-top: 15px;
`

export const MemeGeneratorHeading = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-family: Roboto;
  margin-bottom: 15px;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #ffffff;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  min-height: 100vh;
  width: 70%;
  background-color: #ffffff;
`
export const Input = styled.input`
  outline: none;
  padding: 5px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  font-family: Roboto;
  font-size: 15px;
  background-color: #0b69ff;
  border-width: 0px;
  border-radius: 5px;
  align-self: flex-start;
  height: 30px;
  width: 90px;
  margin-top: 20px;
  cursor: pointer;
`

export const OutputContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  width: 1060px;
  height: 420px;
`
