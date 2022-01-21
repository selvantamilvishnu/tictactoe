import React from 'react';


const Square = ({value, onClick}) => (
    <div className="board-row">
        <button  onClick={onClick} className={`square square-${value}`}>
        </button>
    </div>
)

export default Square;













// import React from 'react';


// const style = {
// 	background: "lightblue",
// 	border: "2px solid darkblue",
// 	fontSize: "30px",
// 	fontWeight: "800",
// 	cursor: "pointer",
// 	outline: "none",
// };

// const Square = ({value, onClick}) => (
//     <div className="board-row">
//         <button style={style} onClick={onClick} className="square square-o square-x">
//             {value}
//         </button>
//     </div>
// )

// export default Square;
