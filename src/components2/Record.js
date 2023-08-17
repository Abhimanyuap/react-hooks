import Navbar from '../components2/Navbar';
import Records from '../components2/Records';

const Record = ({data,onDelete}) => {

  return (
    <div className='record'>
      <Navbar />
      { data.map( e => <Records data = {e} onDelete={onDelete} key = {e.id}/>) }
    </div>
  )
}

export default Record;
