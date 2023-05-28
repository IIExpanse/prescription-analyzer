import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Calendar from "./components/Menu Items/Calendar/Calendar"
import Finance from './components/Menu Items/Finance/Finance';
import Profile from './components/Menu Items/Profile/Profile';
import Support from "./components/Menu Items/Support/Support";
import Settings from "./components/Menu Items/Settings/Settings"
import Documents from './components/Menu Items/Documents/Documents';
import WorkerList from './components/Menu Items/WorkersList/WorkerList';
import PatientList from './components/Menu Items/PatientList/PatientList';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/workers" element={<WorkerList />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h1 style={{ marginLeft: "35%" }}>Данной страницы не существует</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
