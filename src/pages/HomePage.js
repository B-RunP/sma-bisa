import React from "react";
import Navigation from "../component/Navigation";
import NoteList from "../component/NoteList";
import { getAllLessons } from "../utils/data";

function HomePage() {
    const notes = getAllLessons();
    return (
        <React.Fragment>
            <header className="navigation">
                <Navigation />
            </header>
            <main>
                <NoteList notes={notes} />
            </main>
        </React.Fragment>
    )
}

export default HomePage;