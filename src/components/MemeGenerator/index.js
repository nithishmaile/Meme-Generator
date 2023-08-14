import {Component} from 'react'

import {
  LabelParagraph,
  MemeGeneratorContainer,
  FormContainer,
  Input,
  GenerateButton,
  OutputContainer,
  MemeGeneratorHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    imageUrl: '',
    fontSize: '',
    topTextInput: '',
    bottomTextInput: '',
    imageUrlInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeFontsize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    const {
      topTextInput,
      bottomTextInput,
      imageUrlInput,
      fontSizeInput,
    } = this.state
    this.setState({
      topText: topTextInput,
      bottomText: bottomTextInput,
      imageUrl: imageUrlInput,
      fontSize: fontSizeInput,
    })
  }

  render() {
    const {topText, bottomText, imageUrl, fontSize} = this.state
    return (
      <MemeGeneratorContainer>
        <FormContainer onClick={this.onClickGenerate}>
          <MemeGeneratorHeading>Meme Generator</MemeGeneratorHeading>
          <LabelParagraph htmlFor="image" color="#7e858e" fontSize="15px">
            Image Url
          </LabelParagraph>
          <Input
            id="image"
            type="text"
            placeholder="Enter the Image Url"
            onChange={this.onChangeImageUrl}
          />
          <LabelParagraph htmlFor="topText" color="#7e858e" fontSize="15px">
            Top Text
          </LabelParagraph>
          <Input
            id="topText"
            type="text"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
          />
          <LabelParagraph htmlFor="bottomText" color="#7e858e" fontSize="15px">
            Bottom Text
          </LabelParagraph>
          <Input
            id="bottomText"
            type="text"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
          />
          <LabelParagraph htmlFor="select" color="#7e858e" fontSize="15px">
            Font Size
          </LabelParagraph>
          <LabelParagraph
            as="select"
            id="select"
            onChange={this.onChangeFontsize}
          >
            {fontSizesOptionsList.map(eachObj => (
              <option id={eachObj.optionId} key={eachObj.optionId}>
                {eachObj.displayText}
              </option>
            ))}
          </LabelParagraph>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
        <OutputContainer imageUrl={imageUrl} data-testid="meme">
          <LabelParagraph as="p" color="#ffffff" fontSize={fontSize}>
            {topText}
          </LabelParagraph>
          <LabelParagraph as="p" color="#ffffff" fontSize={fontSize}>
            {bottomText}
          </LabelParagraph>
        </OutputContainer>
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
