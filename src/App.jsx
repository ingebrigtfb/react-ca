import { BrowserRouter as Router } from 'react-router'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'


function App() {

  return (
    <Router>
      <Layout>
       <AppRoutes />
      </Layout>
    </Router>
  )
  
}


export default App
