import React, { Component } from 'react';
import axios from "axios";
import './Strikes.css';
class Strikes extends Component{
    constructor(){
        super();
        this.state={
            strikes:[],fullData:[]}
        
    }
    componentDidMount(){
        axios.get("https://randomuser.me/api/?results=7").then((dataObj)=>{
        debugger;   
        console.log(dataObj);
        
        this.setState({strikes:dataObj.data.results,fullData:dataObj.data.results});

        })
        
    }
    buttonClick(gender){
        console.log(gender);
        let genderData=this.state.fullData.filter((e)=>{
            return e.gender===gender;
        })
        this.setState({strikes:genderData});
    }
   


    render(){
        return < div>
        <div className="header">
        <h4>STRIKES</h4></div>
        <button onClick={()=>this.buttonClick("male")}>male</button>
        <button onClick={()=>this.buttonClick("female")}>famale</button>
            
            {
                this.state.strikes.length> 0 ?
                this.state.strikes.map((e)=>{
                    return <div className="divFirst">
                    
                    <img src={e.picture.large} alt={e.name} />
                    <div className="text">
					<h3>{e.name.title+"  "+e.name.first+" "+e.name.last}</h3>
                    </div>
           
						
                        </div>
                })

                :<h5>loading....</h5>
            }
            </div>
    }
}
export default Strikes;