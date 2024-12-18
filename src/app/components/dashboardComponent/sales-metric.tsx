import { Card, CardContent, CardHeader, Box, Typography, LinearProgress } from '@mui/material';
import type { SalesMetric } from './datatype';

interface SalesMetricsProps {
  total: string;
  percentage: string;
  metrics: SalesMetric[];
}

export function SalesMetrics({ total, percentage, metrics }: SalesMetricsProps) {
  return (
    <Card>
      <CardHeader title="Sales overtime" subheader="Of the week based on total purchase" />
      <CardContent>
        <Box display="flex" alignItems="baseline" gap={1} mb={3}>
          <Typography variant="h5" fontWeight="bold">
            ₹{total}
          </Typography>
          <Typography color="success.main" variant="body2">
            +{percentage}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          {metrics.map((metric) => (
            <Box key={metric.label}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2" color="text.secondary">
                  {metric.label}
                </Typography>
                <Box display="flex" gap={1}>
                  <Typography variant="body2" fontWeight="bold">
                    {metric.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={metric.percentage > 0 ? 'success.main' : 'error.main'}
                  >
                    {metric.percentage > 0 ? '+' : ''}{metric.percentage}%
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: metric.color,
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

