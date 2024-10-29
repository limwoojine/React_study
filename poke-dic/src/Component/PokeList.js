import './css/PokeList.css';
import PokeListItem from './PokeListItem';

function PokeList({ pokes, onRemove }) {
   return <div className="PokeList">{pokes.length === 0 ? <div className="empty-message">목록이 없습니다.</div> : pokes.map((poke) => <PokeListItem poke={poke} key={poke.id} onRemove={onRemove} />)}</div>;
}

export default PokeList;
