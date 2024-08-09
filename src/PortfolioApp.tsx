import { Container } from '@mui/material'
import { HomePage } from './pages/Homepage'
import { AppTheme } from './theme/AppTheme'

function PortfolioApp() {
  return (
    <AppTheme>
      <Container disableGutters sx={{bgcolor: 'primary.main', minHeight: '100vh'}}>
        <HomePage />
      </Container>
    </AppTheme>
  )
}

export default PortfolioApp
