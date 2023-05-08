import type { ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

// components
import YearlyBreakup from '../src/components/dashboard/OverallScore';
import ProductPerformance from '../src/components/dashboard/errorReport';
import MonthlyEarnings from '../src/components/dashboard/statusReport';
import SimpleErrors from '../src/components/dashboard/simpleErrors';
import StructuralErrors from '../src/components/dashboard/structuralErrors';
import FullLayout from '../src/layouts/full/FullLayout';

export default function Home() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <SimpleErrors />
          </Grid>
          <Grid item xs={12} lg={4}>
            <YearlyBreakup />
          </Grid>
          <Grid item xs={12} lg={4}>
            <YearlyBreakup />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};