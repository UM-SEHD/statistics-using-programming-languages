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

const EPS704 = () => {
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
            EPS704: Computer Applications in Educational and Behavioral Science Research
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              3 Credit Hours
            </Typography>
            <Typography variant="body2">
            This course introduces the use of statistical software packages R for acquiring, managing, and preparing datasets that are required to produce reliable and valid statistical inferences. With a special focus on R, the course will cover a broad range of hands-on activities in the data analytic process including data coding, file manipulation tasks, data screening, and statistical analysis, and also provide a brief introduction to R programming.
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

export default EPS704;
