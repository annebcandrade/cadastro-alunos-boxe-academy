import Logo from '../../assets/logo.jpg'
import  { Link } from 'react-router-dom'

import { Container, Menu, Li } from './styles'

function Header() {

    return(
      <Container>
        <img src={Logo} alt='logo-boxing'
            />
        <Menu>
              <Li>
                <Link to="/">Home</Link>
            </Li>

            <Li>
                <Link to="/Register">Cadastrar Aluno(a)</Link>
            </Li>
            <Li>
                <Link to="/ViewRegister">Ver Cadastros</Link>
            </Li>
            <Li>
                <Link to="/editRegister">Editar Cadastro</Link>
            </Li>
                </Menu>
            </Container>
    )
}

export default Header 