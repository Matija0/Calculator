import React from "react"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillBackspaceFill} from "react-icons/bs";
import {RiDivideFill} from "react-icons/ri"
import {TbLetterC} from "react-icons/tb"
import {BsPercent} from "react-icons/bs"
import {TbNumber7} from "react-icons/tb"
import {TbNumber8} from "react-icons/tb"
import {TbNumber9} from "react-icons/tb"
import {TbNumber6} from "react-icons/tb"
import {TbNumber5} from "react-icons/tb"
import {TbNumber4} from "react-icons/tb"
import {TbNumber3} from "react-icons/tb"
import {TbNumber2} from "react-icons/tb"
import {TbNumber1} from "react-icons/tb"
import {TbNumber0} from "react-icons/tb"
import {TbLetterX} from "react-icons/tb"
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {BsDot} from "react-icons/bs"
import {FaEquals} from "react-icons/fa"
import {TbSquareRoot2} from "react-icons/tb"

export default function Main(){

    const [value, setValue]= useState("")
   
    function handleClick(e){
        setValue(value.concat(e.target.name));
    }

    function deleteValue(){
        setValue("")
    }

   

    function backSpace(item){
        setValue(value.slice(0, value.length-1))
    }
    
   
    function calculate(){
        setValue(eval(value).toString());
        
    }
    function squareRoot(){
        setValue(Math.sqrt(value))
    }
    return(
        <div className="main">
            <div className="display"><span>'</span>{value}</div>
            <div className="container">
                <div className="row1">
                    <button onClick={deleteValue} className="btn btn-secondary"><TbLetterC/></button>
                    <button onClick={backSpace} className="btn btn-secondary"><BsFillBackspaceFill/></button>
                    <button name="%" onClick={handleClick} className="btn btn-warning"><BsPercent/></button>
                    <button name="/" onClick={handleClick} className="btn btn-warning"><RiDivideFill/></button>
                </div>
                <div className="row2">
                    <button name="7" onClick={handleClick} className="btn btn-secondary"><TbNumber7/></button>
                    <button name="8" onClick={handleClick} className="btn btn-secondary"><TbNumber8/></button>
                    <button name="9" onClick={handleClick} className="btn btn-secondary"><TbNumber9/></button>
                    <button name="*" onClick={handleClick} className="btn btn-warning"><TbLetterX/></button>
                </div>
                <div className="row3">
                    <button name="4" onClick={handleClick} className="btn btn-secondary"><TbNumber4/></button>
                    <button name="5" onClick={handleClick} className="btn btn-secondary"><TbNumber5/></button>
                    <button name="6" onClick={handleClick} className="btn btn-secondary"><TbNumber6/></button>
                    <button name="-" onClick={handleClick} className="btn btn-warning"><AiOutlineMinus/></button>
                </div>
                <div className="row4">
                    <button name="1" onClick={handleClick} className="btn btn-secondary"><TbNumber1/></button>
                    <button name="2" onClick={handleClick} className="btn btn-secondary"><TbNumber2/></button>
                    <button name="3" onClick={handleClick} className="btn btn-secondary"><TbNumber3/></button>
                    <button name="+" onClick={handleClick} className="btn btn-warning"><AiOutlinePlus/></button>
                </div>
                <div className="row5">
                    <button name="0" onClick={handleClick} className=" button1 btn btn-secondary"><TbNumber0/></button>
                    <button name="." onClick={handleClick} className="btn btn-secondary"><BsDot/></button>
                    <button onClick={calculate} className="btn btn-primary"><FaEquals/></button>
                    <button onClick={squareRoot} className="btn btn-warning"><TbSquareRoot2/></button>
                </div>
            </div>
        </div>
    )
}