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

const QuantMeth = () => {
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
              EPS702: Quantitative Methods II
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              3 Credit Hours
            </Typography>
            <Typography variant="body2">
            This course introduces students to techniques of data analysis and statistical inference based on the General Linear Model (GLM). The major topics covered in this class include simple/multiple regression, one- and two-way Analysis of Variance (ANOVA) followed by multiple comparisons, Analysis of Covariance (ANCOVA), and Repeated Measures ANOVA. This course aims to provide a solid conceptual background of these topics, as well as the analytic skills for conducting educational and psychological research in practice. Knowledge of basic algebra and SPSS is required, as is an understanding of the fundamental principles of descriptive statistics and hypothesis testing (as taught, for example, in EPS 700 or equivalent). Knowledge of calculus is not required. Students will conduct statistical analyses using real datasets.
            </Typography>
            <Typography sx={{ mb: 2.0 }} color="text.secondary">
            Prerequisite: EPS 700 or Equivalent.
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

export default QuantMeth;
