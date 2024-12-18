import { useState } from 'react';
import {Box,Drawer,List,ListItem,ListItemButton, ListItemIcon,ListItemText,TextField,Typography,useTheme,} from '@mui/material';
import {Home,Person,Inventory,Receipt,History,Logout,CurrencyExchange,Group, ShoppingCart, Discount,} from '@mui/icons-material';
import { MetricCard } from '../components/dashboardComponent/metric-card';
import { RevenueChart } from '../components/dashboardComponent/revenue-chart';
import { SalesMetrics } from '../components/dashboardComponent/sales-metric';

const DRAWER_WIDTH = 240;

const MENU_ITEMS = [
  { text: 'Home', icon: <Home /> },
  { text: 'Customer', icon: <Person /> },
  { text: 'Product', icon: <Inventory /> },
  { text: 'Transaction', icon: <Receipt /> },
  { text: 'Log Activity', icon: <History /> },
];

const REVENUE_DATA = [
  { day: 'Sun', amount: 200 },
  { day: 'Mon', amount: 150 },
  { day: 'Tue', amount: 200 },
  { day: 'Wed', amount: 120 },
  { day: 'Thu', amount: 120 },
  { day: 'Fri', amount: 400 },
  { day: 'Sat', amount: 180 },
  { day: 'Sun', amount: 200 },
  { day: 'Mon', amount: 220 },
];

const SALES_METRICS = [
  { label: 'Asset received', value: '1.1K', percentage: 3.4, color: '#6366f1' },
  { label: 'Spending', value: '2.3K', percentage: 11.4, color: '#22c55e' },
];

export default function Dashboard() {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Box>
        <List>
          {MENU_ITEMS.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 'auto', p: 2 }}>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Welcome back, Antonio
            </Typography>
            <Typography color="text.secondary">
              Track your sales performance at a glance with our dynamic dashboard, providing
              real-time insights on revenue, conversions, and customer acquisition.
            </Typography>
          </Box>
          <TextField
            placeholder="Search"
            size="small"
            sx={{ width: 300 }}
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2,
            mb: 4,
          }}
        >
          <MetricCard
            icon={<CurrencyExchange />}
            title="Total Revenue"
            value="₹6,10,9287"
          />
          <MetricCard
            icon={<Group />}
            title="Total Customer"
            value="12,04,4324"
          />
          <MetricCard
            icon={<ShoppingCart />}
            title="Total Transaction"
            value="8,34,3782"
          />
          <MetricCard
            icon={<Discount />}
            title="Total Orders"
            value="4,042"
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: 2,
          }}
        >
          <RevenueChart data={REVENUE_DATA} />
          <SalesMetrics
            total="6,10,9287"
            percentage="3.4"
            metrics={SALES_METRICS}
          />
        </Box>
      </Box>
    </Box>
  );
}

