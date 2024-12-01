
import { Col, Container, Row, Table } from 'react-bootstrap';
import './ProjectCost.css'
import data2 from '../Components/ProjectCost.json';


const ProjectCost = () => {
  return (

    <Container>
    <Row>
     <Col className='col'>
      <h3 className='project_heading'><u>Project Cost</u></h3>
      {/* file under src file so we direct fatch data from import method file and use it */}
<Table bordered striped hover  className='table' style={{border:"5px solid"}}>
  <thead>
  <tr>
      <th>S.No</th>
      <th>Particulars</th>
      <th>Crore Npr.</th>
      <th>%</th>
    </tr>
    </thead>
    <tbody>
          {data2.map((user)=>(
              <tr key={user['S.No']}>
              <td>{user['S.No']}</td>
              <td>{user.Particulars}</td>
             <td>{user['Crore Npr.']}</td>
              <td>{user['%']}</td>
          </tr>
          ))}
  </tbody>
    </Table>
    </Col>
    </Row>
    </Container>
    
  )
}

export default ProjectCost;
