import React from "react";
import Header from "./Header";
import Blurb from "./components/Blurb";
import Music from "./components/Music";
import Instruction from "./components/Instruction";
import Bottom from "./components/Bottom/Bottom";
import Footer from "./components/Bottom/Footer";

function App() {
    return (<div>
    <Header />
    <Blurb />
    <Music />
    <Instruction />
    <Bottom />
    <Footer />
    </div>
    )
}

export default App;