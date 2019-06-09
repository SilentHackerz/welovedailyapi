import React, { Component } from 'react';
import axios from "axios";
import { Switch, Link, Route } from 'react-router-dom';
import Branding from './Branding';
import Animation from './Animation';
import Webdesigning from './Webdesigning';
import Illustraion from './Illustraion';
import './Welove.css';

class Welove extends Component{
    constructor(){
        super();
        this.state={
            welove:[]}
        
    }
    componentDidMount(){
        axios.get("https://welovedaily.uk/wd").then((dataObj)=>{
            
        console.log(dataObj);
        
        this.setState({welove:dataObj.data});

        })
    
    }
   click(){
       axios.get("https://welovedaily.uk/wd").then((dataObj)=>{
           this.setState({welove:dataObj.data});
       })
   }
  
    render(){
        return <div className="main" >
        <div className="submit">
        <h6>submit your work<span className="arrow">&#8594;</span></h6>
        </div>
        <h2>Website<span className="love">&#x2661;</span></h2>
        <h5>Inspiration</h5>
        <h1>Daily inspiration, right in your face.</h1>
        <p>Tags:</p>
       <div className="button">

        <Link className="a" to="/">Webdesigning &#43;</Link>
        <Link className="a" to="/br">Branding &#43;</Link>
        <Link className="a" to="/il">Illustraion &#43;</Link>
        <Link className="a" to="/an">Animation &#43;</Link>

    </div> 
        <Switch>
            <Route exact path="/" component={Webdesigning}/>    
            <Route path="/br" component={Branding} />
            <Route path="/il" component={Illustraion}/>
            <Route path="/an" component={Animation}/>
           
          </Switch>

 </div>
    }
    
}
export default Welove;