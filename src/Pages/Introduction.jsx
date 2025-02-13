
import { Col, Container, Row, Table } from 'react-bootstrap';
import './introduction.css';
import introduction_data from '../Components/Introduction.json';


const Introduction = () => {
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //   fetch(data1)
  //   .then(Response => Response.json())
  //   .then(data=>setData(data));
  // },[]);
  return (
    <Container className='container' >
        <Row>
        <Col>
        <h1 className='heading'><u>Nilganga Hydropower Company Ltd.</u></h1>
      <p className='paragraph'>Nilganga Hydropower  is a company involved in the development, operation, 
        and management of hydropower projects in Nepal. It is likely focused on harnessing the country's water resources 
        to generate electricity through hydropower plants. Nilganga Hydropower Pvt Ltd would be involved in various aspects 
        of hydropower project development and management like:</p>
<p className='paragraph'><ol>
  <li>Planning and executing the development of hydropower projects, from obtaining necessary permits to constructing infrastructure such as dams, penstocks, and powerhouses.</li>
<li>Engaging with local communities to address concerns, provide benefits, and ensure sustainable development practices are implemented throughout the project lifecycle.</li>
<li>Nilganga Hydropower comapany Ltd also responsible for managing its day-to-day operations, including maintenance of equipment and ensuring consistent power generation.</li></ol></p>

  <Table bordered striped hover className='table' style={{border:"4px solid"}}>
    <thead>
      <tr>
        <th className='intro_heading'> Company </th>
        <th className="intro_heading"> Nilganga Hydropower Company  Ltd. </th>
      </tr>
    </thead>
      <tbody className='table-row'>
        {introduction_data.map((user)=>(
           <tr key={user.Company}>
           <td>{user.Company}</td>
           <td>{user['Nilganga Hydropower Co.Pvt.Ltd.']}</td>
           
         </tr>
        ))}
      </tbody>
    </Table>
        </Col>
        </Row>
        </Container>
  )
}

export default Introduction;
