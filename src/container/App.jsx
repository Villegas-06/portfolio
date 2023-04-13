import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Bienvenido from '../components/Bienvenido'
import Portafolio from '../components/Portafolio';
import Skills from '../components/Skills';
import Regreso from '../components/Regreso';

const App = () =>{
    return(
        <div>
            <Main>
                <NavBar/>
                <Hero/>
            </Main>
            <Bienvenido/>
            <Skills/>
            <Portafolio/>
            <Regreso/>
        </div>
    )
}

export default App;