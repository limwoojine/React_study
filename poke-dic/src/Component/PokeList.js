import './css/PokeList.css';
import PokeListItem from './PokeListItem';

function PokeList({ pokes, onRemove }) {
   return (
      <div className="PokeList">
         {pokes.map((poke) => (
            <PokeListItem poke={poke} key={poke.id} onRemove={onRemove} /> ///
         ))}
      </div>
   );
}

export default PokeList;
