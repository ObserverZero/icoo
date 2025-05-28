import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Props {
  children: ReactNode;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class MatrixErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Matrix Error:', error);
    console.error('Error Info:', errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
    this.props.onRetry?.();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 2 }}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <ErrorOutlineIcon color="error" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="h6" gutterBottom>
              Matrix Connection Error
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
              {this.state.error?.message || 'Failed to connect to Matrix server'}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleRetry}
              size="small"
            >
              Retry Connection
            </Button>
          </Paper>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default MatrixErrorBoundary; 