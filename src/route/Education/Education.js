import TimeLine from "../../component/TimeLine/TimeLine";
import Menu from '../../component/Navbar/Menu';
import education from '../../data/education.json';

function Education({data}) {  

    return (
        <>
            <Menu/>
            <TimeLine data={education}/>
        </>
    );
  }
  
export default Education;
  