import Spinner from 'react-bootstrap/Spinner';
import './preLoader.css';

function PreLoader() {
  return (
    <>
      <div id="loader" className="absolute-center">
        <Spinner animation="grow" variant="success" />
      </div>
      <div id="error" hidden>
        <center><h2>Упс! Произошла ошибка, мы уже исправляем!</h2></center>
      </div>
    </>
  );
}

export default PreLoader;