import React from 'react';

const Square=({value,onClick,isWiningSquares})=>{
//console.log(value);    
return(
<button 
type="button" 
onClick={onClick} 
className={`square ${isWiningSquares ? 'winning':''} ${value ==='X' ? 'text-green': 'text-orange'
}`}
>
{value}
</button>    
)
}
export default Square;








