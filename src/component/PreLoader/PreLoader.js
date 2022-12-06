import Spinner from 'react-bootstrap/Spinner';
import './preLoader.css';

function PreLoader() {
  return (
    <div id="loader" className="absolute-center">
      <Spinner animation="grow" variant="success" />
    </div>
  );
}

export default PreLoader;