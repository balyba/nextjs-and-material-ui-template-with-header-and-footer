import { Box, Typography, Button, Container, Grid } from "@material-ui/core";

const BlockFour = () => {
  return (
    <>
      <Box>
        <Container align="center">
          <Grid container>
            <Grid item md={6} justifyContent="center" alignItems="center">
              {/* <img /> */}
              <Typography variant="h3">4</Typography>
              <Typography variant="subtitle1">4</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlockFour;
