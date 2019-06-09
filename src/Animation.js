import React, { Component } from 'react';
import axios from "axios";
class Animation extends Component{
    constructor(){
        super();
        this.state={
            welove:[]}
        
    }
    componentDidMount(){
        axios.get("https://welovedaily.uk/an").then((dataObj)=>{
            
        console.log(dataObj);
        
        this.setState({welove:dataObj.data});

        })
    }
    
    render(){
        return <div>
        
        {
                this.state.welove.length> 50 ?
                this.state.welove.map((e)=>{
                    return <div className="welove">
                    
                    <img src={e.img} alt={e.id} />
                       
					<div className="text">	
                    <a className="h3" href={e.reff}><span>by </span>{e.artist}</a>
                    <h4>{e.source}</h4>
                    
                    </div>
                    </div>  
						     
                        }):<h5>loading....</h5> 
        
            }
        
            </div>
    }
    
    
}
export default Animation;