import { Box, Typography, Button, Container, Grid, Link } from "@material-ui/core";

const BlockThird = () => {
  return (
    <>
      <Box>
        <Container align="center">
          <Typography variant="h3">3</Typography>
          <Typography variant="subtitle1">3</Typography>
          <Grid container>
            <Grid item md={4} justifyContent="center" alignItems="center">
              <img />
              <Typography variant="h4">3</Typography>
              <Typography variant="subtitle1">3</Typography>
              <Link>Читать далее...</Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlockThird;
