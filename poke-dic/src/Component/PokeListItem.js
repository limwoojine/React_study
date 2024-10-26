import './css/PokeListItem.css';

function PokeListItem({ poke, onRemove }) {
   const { id, text, imageUrl } = poke;
   return (
      <div className="PokeListItem">
         <div
            className="card"
            onClick={() => {
               onRemove(id);
            }}
         >
            <img className="image" src={imageUrl} alt={text}></img>
            <div className="poke-text">{text}</div>
         </div>
      </div>
   );
}
export default PokeListItem;
