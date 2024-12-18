import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import type { RevenueData } from './datatype';

interface RevenueChartProps {
  data: RevenueData[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <Card>
      <CardHeader
        title="Revenue growth"
        subheader="Of the week on website and compared with e-commerce"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <BarChart
          series={[
            {
              data: data.map(item => item.amount),
              color: '#f4b1a3',
            },
          ]}
          height={300}
          xAxis={[{
            data: data.map(item => item.day),
            scaleType: 'band',
          }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </CardContent>
    </Card>
  );
}

