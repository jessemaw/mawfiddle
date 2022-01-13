import React, { useState } from "react";
import Header from "./Header";
import Blurb from "./components/Blurb";
import Music from "./components/Music";
import { useMediaQuery } from "react-responsive";
import Instruction from "./components/Instruction";
import Bottom from "./components/Bottom/Bottom";
import Footer from "./components/Bottom/Footer";
import MenuModal from "./components/Mobile/MenuModal";
import { CSSTransition } from "react-transition-group";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const [isClicked, setIsClicked] = useState(false);

  function openMenuHandler() {
    setIsClicked(true);
    document.body.setAttribute("style", "position: fixed");
  }

  function closeMenuHandler() {
    setIsClicked(false);
    document.body.setAttribute("style", "position: auto");
  }

  return (
    <div>
      <Header onToggle={openMenuHandler} />
      {isMobile && (
        <CSSTransition
          in={isClicked}
          timeout={500}
          classNames="my-node"
          unmountOnExit
          exit={false}
        >
          <MenuModal onClose={closeMenuHandler} />
        </CSSTransition>
      )}

      <Blurb />
      <Music />
      <Instruction />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
