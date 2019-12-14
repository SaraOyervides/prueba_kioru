/* Componente que renderiza el titulo del App */
import React from 'react'
import { Component } from 'react';
import './Title.css'

class Title extends Component{

    render(){
        
        return(
            <div className="DivTitle">
              <span className="TitleFont">Rock, Paper & Scissors</span>  
            </div>
            
        )
    }    
}

export default Title