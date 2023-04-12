import {useState} from 'react'
import {CoinTossContainer,CardContainer,Header,Para,CoinImage,TossButton,TossContainer,Para1} from './styled'


let TossResult;

const CoinToss =()=>{

    const [head,setHead]= useState(0)
    const [tail,setTail] = useState(0)
 

    const onClickButton=()=>{
          TossResult =Math.floor(Math.random()*2)

          if (TossResult===0){
            setHead(prevState=>prevState+1)
          }else{
          setTail(prevState=>prevState+1)
          }
    }

    const imageUrl= !TossResult?'https://assets.ccbp.in/frontend/react-js/heads-img.png':'https://assets.ccbp.in/frontend/react-js/tails-img.png'


    return(
        <CoinTossContainer>
            <CardContainer>
                <Header>Coin Toss Game</Header>
                <Para>Heads (or) Tails</Para>
                <CoinImage src={imageUrl} alt="Toss game"/>
                <TossButton onClick={onClickButton}>Toss Coin</TossButton>
                <TossContainer>
                    <Para1>Total:{head+tail}</Para1>
                    <Para1>Heads:{head}</Para1>
                    <Para1>Tails:{tail}</Para1>
                </TossContainer>
            </CardContainer>
        </CoinTossContainer>
    )

}

export default CoinToss