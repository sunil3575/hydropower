import './VacancyNotices.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import jobs from '../Components/VacancyNotices.json';


const VacancyNotices = () => {
  return (
    <Container className='vac_conatainer'>
      <h1 className='vac_heading'><u>Vacancy Notice</u></h1>
      <Row>
        <Col>
          {jobs.length === 0 ? (<Table bordered striped hover className='table1' style={{ border: "5px solid" }}>
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Post</th>
                  <th>ViewPostLink</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td className='vac_table_link'> <i class="fa-solid fa-file-pdf vacancy_pdf"></i> <a className='vac_anchor' href={user.pdfLink} rel="noopener noreferrer" download={user.pdfLink}>{user.pdfLink}</a></td>
                  </tr>
                ))}
              </tbody>
            </Table>) : (
              <p style={{textAlign:"center"}}>Vacancy Not available Now</p>
          )}
        </Col>
      </Row>
    </Container>

  )
}

export default VacancyNotices;
