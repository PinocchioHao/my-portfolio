import './App.css'
import AboutMe from "./components/pages/AboutMe.jsx";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/pages/Contact.jsx";
import AppHeader from "./components/shared/AppHeader.jsx";
import {Suspense} from "react";
import Projects from "./components/pages/Projects.jsx";
import AppFooter from "./components/shared/AppFooter.jsx";
import Home from "./components/pages/Home.jsx";
import ProjectDetail from "./components/pages/ProjectDetail.jsx";


function App() {
  // const [count, setCount] = useState(0)

  return (
          <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
              <Router>
                  {/*<ScrollToTop/>*/}
                  <AppHeader/>
                  <Suspense fallback={""}>
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="projects" element={<Projects/>}/>

                          {/*<Route*/}
                          {/*    path="projects/single-project"*/}
                          {/*    element={<ProjectDetail/>}*/}
                          {/*/>*/}

                          {/* 新增：动态路由，:id 会匹配 URL 中的项目 ID */}
                          <Route path="/projects/:id" element={<ProjectDetail />} />



                          <Route path="about" element={<AboutMe/>}/>
                          <Route path="contact" element={<Contact/>}/>
                      </Routes>
                  </Suspense>
                  <AppFooter/>
              </Router>
              {/*<UseScrollToTop/>*/}
          </div>
  )
}

export default App
