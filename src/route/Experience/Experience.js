import TimeLine from "../../component/TimeLine/TimeLine";
import Menu from '../../component/Navbar/Menu';
import experience from '../../data/experience.json';

function Experience() {  

    return (
        <>
            <Menu/>
            <TimeLine data={experience}/>
        </>
    );
  }
  
export default Experience;