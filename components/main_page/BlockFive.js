import { Box, Typography, Button, Container, Grid } from "@material-ui/core";

const BlockFive = () => {
  return (
    <>
      <Box>
        <Typography variant="h3">5</Typography>
        <Container align="center">
          <Grid container>
            <Grid item md={3} justifyContent="center" alignItems="center">
              {/* <img /> */}
              <Typography variant="h4">5</Typography>
              <Typography variant="subtitle1">5</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlockFive;
