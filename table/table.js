"use strict"

let data=""
var slc = document.getElementById('slc');

console.log(slc.value);

let color=""

function Render() {
    data = ''
    for(let i=0;i<slc.value;i++){
        data+=`<tr>`;
    
        for(let j=0;j<slc.value;j++){
            if(i==j || j==slc.value-i-1){
                color='black';
            }
            else{
                color='';
            }
            data+=`<td style="background-color:${color};"> </td>`;
            
    
        }
        data+=`</tr>`
    } 
    document.getElementById("tbl").innerHTML=data;
}


slc.addEventListener('change',Render);

