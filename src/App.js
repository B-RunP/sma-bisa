import React from 'react';
import LessonPage from './pages/LessonPage';
import HomePage from './pages/HomePage';
import Navigation from './component/Navigation';
import AboutPage from './pages/AboutPage';
import { Routes, Route } from 'react-router-dom';
import DetailPageWrapper from './pages/DetailPage';

function App() {
    return (
        <React.Fragment>
            <header className="navigation">
                <h1>SMABisa</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/lesson' element={<LessonPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='detail/:id' element={<DetailPageWrapper />} />
                </Routes>
            </main>
        </React.Fragment>
    )
}

export default App;