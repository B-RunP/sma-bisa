import React from 'react';
import LessonPage from './pages/LessonPage';
import Navigation from './component/Navigation';
import { Routes, Route } from 'react-router-dom';
import DetailPageWrapper from './pages/DetailPage';

function App() {
    return (
        <React.Fragment>
            <header className="navigation">
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<LessonPage />} />
                    <Route path='detail/:id' element={<DetailPageWrapper />} />
                </Routes>
            </main>
        </React.Fragment>
    )
}

export default App;