import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // You could also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    
    // Navigate to home page
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)',
            padding: '2rem',
          }}
        >
          <div
            style={{
              maxWidth: '600px',
              width: '100%',
              background: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '3rem',
              boxShadow: 'var(--shadow-xl)',
              textAlign: 'center',
              border: '1px solid var(--color-border)',
            }}
          >
            {/* Error Icon */}
            <div
              style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                animation: 'bounce 2s ease-in-out infinite',
              }}
              role="img"
              aria-label="Error"
            >
              ⚠️
            </div>

            {/* Error Title */}
            <h1
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--color-text-primary)',
                marginBottom: '1rem',
              }}
            >
              Oops! Something went wrong
            </h1>

            {/* Error Description */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}
            >
              We encountered an unexpected error. Don't worry, your data is safe. 
              Try refreshing the page or returning to the home page.
            </p>

            {/* Error Details (Development Mode) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details
                style={{
                  marginBottom: '2rem',
                  textAlign: 'left',
                  background: 'var(--color-bg-secondary)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <summary
                  style={{
                    cursor: 'pointer',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Error Details (Development Only)
                </summary>
                <pre
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-danger)',
                    overflow: 'auto',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    marginTop: '1rem',
                  }}
                >
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={this.handleReset}
                className="btn btn-primary"
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                }}
                aria-label="Go to home page"
              >
                🏠 Go Home
              </button>

              <button
                onClick={() => window.location.reload()}
                className="btn"
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  background: 'var(--color-bg-secondary)',
                  color: 'var(--color-text-primary)',
                  border: '1px solid var(--color-border)',
                }}
                aria-label="Refresh the page"
              >
                🔄 Refresh Page
              </button>
            </div>

            {/* Support Link */}
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.875rem',
                color: 'var(--color-text-tertiary)',
              }}
            >
              If the problem persists, please{' '}
              <a
                href="mailto:support@reclaimpro.com"
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'underline',
                }}
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
