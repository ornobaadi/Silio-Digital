import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error details for debugging
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // You can also log the error to an error reporting service here
        // logErrorToService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            return (
                <div className="min-h-screen bg-[#030303] flex items-center justify-center px-4">
                    <div className="max-w-2xl w-full bg-[#1a1a1a] rounded-3xl p-8 border border-white/10">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                😔 Oops! Something went wrong
                            </h1>
                            <p className="text-white/70 mb-6">
                                We apologize for the inconvenience. The page encountered an error.
                            </p>

                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <details className="text-left mb-6">
                                    <summary className="cursor-pointer text-purple-500 hover:text-purple-400 mb-2">
                                        Error Details (Development Only)
                                    </summary>
                                    <pre className="bg-black/50 p-4 rounded-xl overflow-auto text-xs text-red-400 border border-red-500/20">
                                        {this.state.error.toString()}
                                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                                    </pre>
                                </details>
                            )}

                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300"
                                >
                                    Reload Page
                                </button>
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-colors duration-300"
                                >
                                    Go Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
