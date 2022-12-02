import React from 'react';
import LessonPage from './pages/LessonPage';
import Navigation from './component/Navigation';
import { Routes, Route } from 'react-router-dom';
import DetailPageWrapper from './pages/DetailPage';
import Home from './navbar/PageNavbar/Home';
import Jelajah from './navbar/PageNavbar/Jelajah';
import Favorit from './navbar/PageNavbar/Favorit';
import Tentang from './navbar/PageNavbar/Tentang';
import BahasaIndonesia from './navbar/PageNavbar/Bind';
import Ipa from './navbar/PageNavbar/Ipa';
import Ips from './navbar/PageNavbar/Ips';
import Pemrograman from './navbar/PageNavbar/Pemrograman';
import SignUp from './navbar/PageNavbar/SignUp';

function App() {
    return (
        <React.Fragment>
            <header className="navigation">
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/jelajah" exact component={Jelajah}></Route>
                    <Route path="/favorit" exact component={Favorit}></Route>
                    <Route path="/tentang" exact component={Tentang}></Route>
                    <Route path="/bind" exact component={BahasaIndonesia}></Route>
                    <Route path="/ipa" exact component={Ipa}></Route>
                    <Route path="/ips" exact component={Ips}></Route>
                    <Route path="/program" exact component={Pemrograman}></Route>
                    <Route path="/signup" exact component={SignUp}></Route>
                    <Route path='/' element={<LessonPage />} />
                    <Route path='detail/:id' element={<DetailPageWrapper />} />
                </Routes>
            </main>
        </React.Fragment>
    )
}

export default App;