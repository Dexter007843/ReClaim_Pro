// 404 Not Found Page
// Displayed when user navigates to undefined routes

import ErrorState from '../components/ErrorState'
import PageTransition from '../components/PageTransition'

function NotFound() {
  return (
    <PageTransition>
      <div className="page">
      <div className="container">
        <ErrorState
          icon="🔍"
          title="Page Not Found"
          description="Sorry, the page you're looking for doesn't exist. It might have been removed or the URL might be incorrect."
          actionLabel="Go Home"
          actionLink="/"
          secondaryLabel="Visit Dashboard"
          secondaryLink="/dashboard"
          size="large"
        />
      </div>
    </div>    </PageTransition>  )
}

export default NotFound
