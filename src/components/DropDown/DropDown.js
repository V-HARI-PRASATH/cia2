import React from "react";
import ColorChanger from "../../ColorChanger/ColorChanger";
import './DropDown.css';
function dropDown()
{
    if(document.getElementById('block').style.display=='none')
    {
        document.getElementById('block').style.display='block';
    }
    else{
        document.getElementById('block').style.display='none';
    }
}
function drop()
{
    document.getElementById('block').style.display='none';
}
function DropDown()
{
        const [color,setColor]=React.useState('lime');
        return(
            <>
            <center>
                <div id="dropdownwrapper" onMouseLeave={drop}>
                    <div id="dropdowncontainer" onClick={dropDown}><h1>DropDown</h1></div>
                    <div id="block">
                        <button data-testid="option" onClick={()=>{setColor('lime')}}><h3>Lime</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('lavender')}}><h3>Lavender</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('crimson')}}><h3>Crimson</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('darkblue')}}><h3>Darkblue</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('teal')}}><h3>Teal</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('rebeccapurple')}}><h3>Rebecca Purple</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('ghostwhite')}}><h3>Ghost White</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('aquamarine')}}><h3>Aqua Marine</h3></button><br/>
                        <button data-testid="option" onClick={()=>{setColor('aliceblue')}}><h3>Alice Blue</h3></button><br/>
                    </div>
                </div>
                </center>
                <ColorChanger color={color}><h1>{color}</h1></ColorChanger>
            </>
        )
}

export default DropDown;