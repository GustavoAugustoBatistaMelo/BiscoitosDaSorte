import React,{Component} from "react";
import  biscoito from './assets/biscoito.png'
import {Container,Img,TextoFrase} from './styles'


class App extends Component{

  constructor(props){

    super(props);
    this.state ={
       textoFrase:''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];
  }
  quebraBiscoito(){
      let state = this.state;
      let numAleatorio = Math.floor(Math.random() * this.frases.length)
      state.textoFrase = this.frases[numAleatorio]
      this.setState(state)
  }

  render(){
    return(
      <Container>
          <Img src={biscoito}/>
          <Botao nome='abrir biscoito'  acaoBtn={this.quebraBiscoito}/>
          <TextoFrase cor ="dd7b22" font ={20}>{this.state.textoFrase}</TextoFrase>
      </Container>
    );
  }


}

class Botao extends Component{
  render(){
    return(
    <div>
          
          <button onClick={this.props.acaoBtn}> {this.props.nome} </button>
    </div>
    );
  }

}
export default App;
