import './css/PokeListItem.css';
import { MdDeleteOutline } from 'react-icons/md';
import React, { useState } from 'react';

function PokeListItem({ poke, onRemove }) {
   const { id, text, imageUrl } = poke;
   const [isStatus, setIsStatus] = useState(true);

   const doubleClickChangeStatus = () => {
      setIsStatus((prev) => !prev);
   };

   return (
      <div className="PokeListItem">
         <div className="card" onDoubleClick={doubleClickChangeStatus}>
            <img className={`image ${!isStatus ? 'inactive' : ''}`} src={imageUrl} alt={text}></img>
            <div className={`poke-text ${!isStatus ? 'inactive' : ''}`}>{text}</div>
            {isStatus && (
               <div className="delete-icon" onClick={() => onRemove(id)}>
                  <MdDeleteOutline />
               </div>
            )}
         </div>
      </div>
   );
}
export default PokeListItem;
