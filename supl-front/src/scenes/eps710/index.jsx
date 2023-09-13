import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import UMLogo from '../../img/umLogo.png'

const EPS710 = () => {
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
      <Grid xs={4}>
        <Card sx={{ minWidth: 275 }}>
          <CardMedia
            component="img"
            height={250}
            image= {UMLogo}
            title="UM Logo"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Welcome to
            </Typography>
            <Typography variant="h5" component="div">
              EPS710: Meta-Analytic Methods for Research Synthesis
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              3 Credit Hours
            </Typography>
            <Typography variant="body2">
            Meta-analysis is the general practice of combining, comparing, and interpreting statistics across a set of studies that investigate the same (or similar) phen omena using a properly motivated theoretical framework. Meta-analysis has beco me a popular tool in a variety of research disciplines, including the social sc iences, education, medicine, and business. This course porvides a thorough int orduction to the theoretical foundations of meta-analysis, discusses commonly u sed statistical techniques, and analyzes several examples of the existing meta- analysis. Emphasis is placed on application, so that students are trained to i ndependently perform a meta-analysis, from start to finish, in whatever substan tive area interests students the most.
            </Typography>
            <Typography sx={{ mb: 2.0 }} color="text.secondary">
            Prerequisite: None
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Syllabus Link</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={4}></Grid>
      </Grid>
    </Box>
    );
}

export default EPS710;
