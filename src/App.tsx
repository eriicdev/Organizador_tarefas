import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import Estiloglobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Estiloglobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
