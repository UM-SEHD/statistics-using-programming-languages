import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import UMLogo from '../../img/umLogo.png'

const Home = () => {
return(
  <Box sx={{ width: '100%' }}>
    <Grid 
    container 
    rowSpacing={3} 
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    alignItems={'center'}
    justify={'center'}
    >
      <Grid xs={4}></Grid>
      <Grid xs={3}>
        <Card >
          <CardMedia
          component="img"
          height={250}
          image= {UMLogo}
          title="UM Logo"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent sx={{justifyItems: 'center'}}>
            <Typography sx={{ fontSize: 14, textJustify: 'center'}} color="text.secondary" gutterBottom>
              Welcome to
            </Typography>
            <Typography variant="h5" component="div">
              Home Page
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    <Grid xs={4}></Grid>
  </Grid>
</Box>
);
}

export default Home;

//sx={{ maxWidth: 400, minWidth: 275, justifyContent: 'center', justifyItems: 'center', height: '50vh' }}