import Login from './pages/Login';
import InterListStudent from './pages/etudiant/InterListStudent';
import InterListProfesseur from './pages/professeur/InterListProfesseur';
import GestionEtudiants from './pages/admininstration/GestionEtudiants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GestionProfesseurs from './pages/admininstration/GestionProfesseurs';
import GestionCompetences from './pages/admininstration/GestionCompetences';
import GestionStages from './pages/admininstration/GestionStages';
import ModalitesStage from './pages/admininstration/ModalitesStage';

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Routes>
          <Route path="/connexion" element={<Login />} />
          <Route path="/etudiant/stages" element={<InterListStudent />} />
          <Route path="/professeur/stages" element={<InterListProfesseur />} />
          {/* <Route path="/admin" element={<InterListStudent />} /> */}
          <Route path="/admin/etudiants" element={<GestionEtudiants />} />
          <Route path="/admin/professeurs" element={<GestionProfesseurs />} />
          <Route path="/admin/competences" element={<GestionCompetences />} />
          <Route path="/admin/modalitesstages" element={<ModalitesStage />} />
          <Route path="/admin/stages" element={<GestionStages />} />
          {/* <InterListProfesseur/> */}
          {/* <InterListStudent/> */}
          {/* <DashboardAdmin/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
