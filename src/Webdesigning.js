import React, { Component } from 'react';
import axios from "axios";
class Webdesigning extends Component{
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
        // axios.get("https://welovedaily.uk/wd").then((dataObj2)=>{
        //     debugger;
        //     console.log(dataObj2);
        //     this.setState({welove2:dataObj2.data});
        // })
             
    }

    render(){
        return <div>
            {
                this.state.welove.length> 50 ?
                this.state.welove.map((e)=>{
                    return <div className="welove2">
                    
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
export default Webdesigning;

