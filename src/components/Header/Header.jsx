import { Container, Logo, Links, LinkItem, LinkElement, Button } from './Styles';
import { BiCodeCurly, BiSun, BiMenuAltLeft, BiMoon } from "react-icons/bi";
import { useState, useContext } from 'react';
import { useMode } from 'main/ModeContext';

const Header = ({mode, setMode}) => {

    const [menuActivated, setMenuActivated] = useState(false);

    const mode2 = useMode(); 
    console.log(mode2);

    const handleChangeMode = () => {
        if(mode === 'dark') {
            setMode('light');
        }else {
            setMode('dark');
        }
    }
    
    localStorage.setItem('mode', JSON.stringify(mode));

  return (
    <Container mode={mode}>
        <Logo to="/" mode={mode}>
            <BiCodeCurly/>
            Logo
        </Logo>
        <Links activated={menuActivated.toString()} mode={mode}>
            <LinkItem>
                <LinkElement to="/characters">Characters</LinkElement>
            </LinkItem>
            <LinkItem>
                <LinkElement to="/chapters">Chapters</LinkElement>
            </LinkItem>
            <LinkItem>
                <Button onClick={handleChangeMode}>
                    { mode === 'dark' ? <BiSun/> : <BiMoon/> }
                </Button>
            </LinkItem>
        </Links>
        <Button className="button-menu" onClick={() => setMenuActivated(!menuActivated)}>
            <BiMenuAltLeft/>
        </Button>
    </Container>
  )
}

export default Header;
