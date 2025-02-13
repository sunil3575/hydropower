
import Home from './Pages/Home';
import EnergyAndRevenue from './Pages/EnergyAndRevenue';
import Project from './Pages/Project';
import About from './Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Errorpage from './Pages/Errorpage';
import Introduction from './Pages/Introduction';
import ExistingBoardOfDirectors from './Pages/ExistingBoardOfDirectors';
import CompletedJob from './Pages/CompletedJob';
import ProjectCost from './Pages/ProjectCost';
import CapitalPlan from './Pages/CapitalPlan';
import FinancialResults from './Pages/FinancialResults';
import CapitalStructure from './Pages/CapitalStructure';
import AboutProject from './Pages/AboutProject';
import Layout from './Pages/Layout';
import Contact from './Pages/Contact';
import VacancyNotices from './Pages/VacancyNotices';
import Location from './Pages/Location';
import Company_Map from './Pages/Company_Map';
import 'leaflet/dist/leaflet.css';
import Project_Map from './Pages/Project_Map';
import SevereDamages from './Pages/SevereDamages';
import CabinetApproves from './Pages/CabinetApproves';
import BhoteKoshi from './Pages/BhoteKoshi';
import GoogleCalender from './Components/GoogleCalender';
import Gallary from './Pages/Gallary';
import TeamMembers from './Pages/TeamMembers';
import NewsList from './Pages/NewsList';
import Page from './Pages/Page';
import Map from './Pages/Map';






function App() {
  
  return (
    <>
  
    <BrowserRouter>
      <Routes>
           <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='/home' element={< Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/introduction" element={<Introduction/>}/>
          <Route path="/directors" element={<ExistingBoardOfDirectors/>}/>
          <Route path="/completedjob" element={<CompletedJob/>}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/aboutproject" element={<AboutProject/>}/>
          <Route path="/projectcost" element={<ProjectCost/>}/>
          <Route path="/capitalplan" element={<CapitalPlan/>}/>
          <Route path="/energy" element={<EnergyAndRevenue/>}/>
          <Route path="/financial" element={<FinancialResults/>}/>
          <Route path="/capitalstruture" element={<CapitalStructure/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/vacanc" element={<VacancyNotices/>}/>
          <Route path='/company_map' element={<Company_Map/>}/>
          <Route path='/project_map' element={<Project_Map/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/severe' element={<SevereDamages/>}/>
          <Route path='/cabinet' element={<CabinetApproves/>}/>
          <Route path='/bhotekoshi' element={<BhoteKoshi/>}/>
          <Route path='/calender' element={<GoogleCalender/>}/>
          <Route path='/gallary' element={<Gallary/>}/>
          {/* <Route path='/team' element={<TeamMembers/>}/> */}
            <Route path='/News/:id' element={<NewsList/>}/>
          <Route path="*" element={<Errorpage/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
   
   
  
 
    </>
    
  );
}

export default App;
