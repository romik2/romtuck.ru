import TimeLine from "../../component/TimeLine/TimeLine";
import Menu from '../../component/Navbar/Menu';

function Experience({data}) {  
    return (
        <>
            <Menu/>
            <TimeLine data={data}/>
        </>
    );
}
  
export default Experience;