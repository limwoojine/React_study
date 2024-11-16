import Grid from '@mui/material/Grid2';
import { Container } from '@mui/material';

function MUI3() {
   /*
   xs, extra-small: 0px
   sm, small: 600px
   md, medium: 900px
   lg, large: 1200px
   xl, extra-large: 1536px 
   */

   // 1spacing = 8px
   return (
      <Container maxwidth="md">
         <Grid container spacing={2}>
            <Grid style={{ backgroundColor: 'skyblue' }} size={{ xs: 6, md: 8 }}>
               xs=6 md=8
            </Grid>
            <Grid style={{ backgroundColor: 'skyblue' }} size={{ xs: 6, md: 4 }}>
               xs=6 md=4
            </Grid>
            <Grid style={{ backgroundColor: 'skyblue' }} size={{ xs: 6, md: 4 }}>
               xs=6 md=4
            </Grid>
            <Grid style={{ backgroundColor: 'skyblue' }} size={{ xs: 6, md: 8 }}>
               xs=6 md=8
            </Grid>
         </Grid>
      </Container>
   );
}

export default MUI3;
