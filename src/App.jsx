import gsap from "gsap";
import {Navbar, Welcome, Dock, Home, MyCal, MyTime, MyMusic} from "#components";
import {Contact, Finder, Image, Resume, Safari, Terminal, Text} from "#windows";

import {Draggable} from "gsap/Draggable";
import {Photos} from "#windows/Index.js";
gsap.registerPlugin(Draggable);

const App = () => {
    return (

        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>


            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
           <Contact/>
            <Home/>
            <Photos/>

            {/*<MyCal/>*/}
            {/*<MyTime/>*/}
            <MyMusic/>
        </main>
    )
}
export default App
