import React from 'react'
import { Component } from 'react';
import './Options.css'
import piedra_empate from './img/piedra_empate.png'
import piedra_gana from './img/piedra_gana.png'
import piedra from './img/piedra.png'
import papel_empate from './img/papel_empate.png'
import papel_gana from './img/papel_gana.png'
import papel from './img/papel.png'
import tijera_empate from './img/tijera_empate.png'
import tijera_gana from './img/tijera_gana.png'
import tijera from './img/tijera.png'

import { render } from '@testing-library/react';


class Options extends Component{

    state={
        user:0,
        pc:0
    }

    render(){
        
        const handleCloseAd = () => {
            document.getElementById('DivAd').remove();
            var intro = document.getElementById('principal');
            intro.style.filter = 'blur(0px)';
        }
    
        const handleClickPiedra = () => {
            let randomcito = Math.floor(Math.random() * Math.floor(3))
            console.log(randomcito)
            
            var intro = document.getElementById('principal');
                intro.style.filter = 'blur(2px)';

            switch (randomcito){
                case 0:
                    render(
                        <div className="DivAd" >
                            <div className="ContAd" id="DivAd">
                                <span className="OptionTitle">¡EMPATE!</span>
                                <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={piedra_empate}></img>
                                <span className="OptionTitle">Pc escogió PIEDRA.</span>
                                <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>
                                
                            </div>
                        </div>
                    )
                break;
            
                case 1:
                    render(
                        <div class="DivAd" >
                            <div class="ContAd" id="DivAd">
                                <span class="OptionTitle">¡PERDISTE!</span>
                                <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={papel_gana}></img>
                                <span class="OptionTitle">Pc escogió PAPEL.</span>
                                <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                            </div>
                        </div>
                    )
                    this.setState({pc: this.state.pc+1})
  
                break;
            
                case 2:
                    render(
                        <div class="DivAd" >
                            <div class="ContAd" id="DivAd">
                                <span class="OptionTitle">¡GANASTE!</span>
                                <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={piedra_gana}></img>
                                <span class="OptionTitle">Pc escogió TIJERA.</span>
                                <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                            </div>
                        </div>
                    )
                    this.setState({user: this.state.user+1})
                    
                break;
            
            }
        }

    const handleClickPapel = () => {
        let randomcito = Math.floor(Math.random() * Math.floor(3))
        console.log(randomcito)
        var intro = document.getElementById('principal');
        intro.style.filter = 'blur(2px)';

        switch (randomcito){
            case 0:
                    render(
                    <div className="DivAd" >
                        <div className="ContAd" id="DivAd">
                            <span className="OptionTitle">¡GANASTE!</span>
                            <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={papel_gana}></img>
                            <span className="OptionTitle">Pc escogió PIEDRA.</span>
                            <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                        </div>
                    </div>
                )
        
                this.setState({user: this.state.user+1})
                
            break;
        
            case 1:
                render(
                    <div class="DivAd" >
                        <div class="ContAd" id="DivAd">
                            <span class="OptionTitle">¡EMPATE!</span>
                            <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={papel_empate}></img>
                            <span class="OptionTitle">Pc escogió PAPEL.</span>
                            <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                        </div>
                    </div>
                )    
                    
            break;
        
            case 2:
                render(
                    <div class="DivAd" >
                        <div class="ContAd" id="DivAd">
                            <span class="OptionTitle">PERDISTE!</span>
                            <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={tijera_gana}></img>
                            <span class="OptionTitle">Pc escogió TIJERA.</span>
                            <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                        </div>
                    </div>
                )

                this.setState({pc: this.state.pc+1})
                   
            break;
        }
    }
        
    const handleClickTijera = () => {
        let randomcito = Math.floor(Math.random() * Math.floor(3))
        console.log(randomcito)
        var intro = document.getElementById('principal');
        intro.style.filter = 'blur(2px)';
        switch (randomcito){
            case 0:
                render(
                    <div className="DivAd" >
                        <div className="ContAd" id="DivAd">
                            <span className="OptionTitle">¡PERDISTE!</span>
                            <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={piedra_gana}></img>
                            <span className="OptionTitle">Pc escogió PIEDRA.</span>
                            <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                        </div>
                    </div>
                )
        
            this.setState({pc: this.state.pc+1})
                
            break;
        
            case 1:
                render(
                    <div class="DivAd" >
                        <div class="ContAd" id="DivAd">
                            <span class="OptionTitle">¡GANASTE!</span>
                            <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={tijera_gana}></img>
                            <span class="OptionTitle">Pc escogió PAPEL.</span>
                            <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                        </div>
                </div>
                )
            
            this.setState({user: this.state.user+1})
                    
            break;
        
            case 2:
                render(
                    <div class="DivAd" >
                        <div class="ContAd" id="DivAd">
                            <span class="OptionTitle">¡EMPATE!</span>
                            <img style={{paddingTop: '5%', paddingBottom: '3%'}} src={tijera_empate}></img>
                            <span class="OptionTitle">Pc escogió TIJERA.</span>
                            <div style={{paddingTop:'10px'}}>
                                    <button className="PlayBtn" onClick={handleCloseAd}>Jugar</button>
                                </div>                        </div>
                    </div>
                )
                    
            break;
        
        }
    }


    return (
        <div>
            <div class="DivOptions" >
                <div class="ContOption" id="piedra" onClick={handleClickPiedra}>
                    <img src={piedra}></img>
                    <span class="OptionTitle">Piedra</span>
                </div>
            <div class="ContOption" id="papel" onClick={handleClickPapel}>
                <img src={papel}></img>
                <span class="OptionTitle">Papel</span>
            </div>
            <div class="ContOption" id="tijera" onClick={handleClickTijera}>
                <img src={tijera}></img>
                <span class="OptionTitle">Tijera</span>
            </div>
        </div>

        <div class="DivScore" >
                    
            <table class="ScoreTitle">
                <caption id="Score">Score</caption>
                    <tbody>
                        <tr>
                            <td class="User">Sara</td>
                            <td class="Number">{this.state.user}</td>
                        </tr>
                        <tr>
                            <td class="User">PC</td>
                            <td class="Number">{this.state.pc}</td>
                        </tr>
                    </tbody>
            </table>
                    
        </div>
        </div>
        
    )
}
  }
  
  export default Options