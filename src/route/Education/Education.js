import TimeLine from "../../component/TimeLine/TimeLine";
import Menu from '../../component/Navbar/Menu';

function Education({data}) {  
    return (
        <>
            <Menu/>
            <TimeLine data={data}/>
        </>
    );
}
  
export default Education;