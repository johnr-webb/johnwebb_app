import React from 'react';
import { Box, Skeleton, Card, CardContent } from '@mui/material';

const LoadingSkeleton = ({ count = 3, variant = 'rectangular', height = 200 }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} sx={{ width: '100%' }}>
          <CardContent>
            <Skeleton variant="text" width="60%" height={32} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="40%" height={24} sx={{ mb: 2 }} />
            <Skeleton variant={variant} width="100%" height={height} />
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <Skeleton variant="rectangular" width={80} height={36} />
              <Skeleton variant="rectangular" width={80} height={36} />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default LoadingSkeleton;
