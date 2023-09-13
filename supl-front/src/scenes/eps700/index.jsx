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

const EPS700 = () => {
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
            EPS700: Quantitative Methods I
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              3 Credit Hours
            </Typography>
            <Typography variant="body2">
            This course provides an introduction to data analysis and statistical inference. Students learn to describe data (quantitatively and graphically), to select and compute statistical estimates and hypothesis tests, to use computer packages (SPSS) to accomplish these tasks, and to interpret and write about the results of the estimates and tests. Knowledge of basic algebra is needed. Higher mathematics (e.g., trigonometry, calculus) is not used.
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

export default EPS700;
