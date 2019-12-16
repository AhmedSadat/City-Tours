
import React, { useState , useRef } from 'react';
import './City.css';



const city = (props) => {

    const [info , setInfo ] = useState({
         infoChecker : false  
    })

    const ref = useRef(null) ;

   const toggleInfo = ()=> {

    let changeChecker = info.infoChecker ;
    changeChecker = !changeChecker ;
    console.log();
    if(changeChecker){
        ref.current.className = "fas fa-caret-square-down"
    }else{
        ref.current.className = "fas fa-caret-square-up"
    }
     
    setInfo({
        infoChecker : changeChecker
    })

    }


    return (

        <div className="City">
            <div className="cityImage">
                <img src={props.img} />
                <span className="closeBtn" onClick={props.delete}>
                    <i className="fa fa-window-close"></i>
                </span>
            </div>
            <div className="cityDescription">
                <h1>{props.city}</h1>
                <h4>{props.name}</h4>
                <h5>  info{''}
                <span>
                    <i className="fas fa-caret-square-up" ref={ref} onClick={()=>toggleInfo()}></i>
                </span>
                </h5>
               { 
                info.infoChecker ?   
                  <p>{props.info}</p>
                  : null }
            </div>
        </div>



    );



}

export default city;