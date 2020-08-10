import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Grid, List, ListItem } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      //may need to use media queries? idk, the table isn't rendering correctly on mobile.
      fontSize: 18,
      fontWeight: "bold"
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        //got rid of this
    },
});

function MLBStand(props) {

    const { standings } = props;
    const classes = useStyles();

    return standings && (
       <Container>
            <Grid className="main" container direction="column" justify-content="space-evenly" alignItems="center">
                <Grid item>
                    <h1>MLB Standings</h1>
                </Grid>
            <Grid item>
            {standings.map((division) => (
                <Grid item>
                <Grid item>
                    <h2>{division.div_name}</h2>
                </Grid>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Team</StyledTableCell>
                      <StyledTableCell align="right">Wins</StyledTableCell>
                      <StyledTableCell align="right">Losses</StyledTableCell>
                      <StyledTableCell align="right">GB</StyledTableCell>
                      <StyledTableCell align="right">WC Rank</StyledTableCell>
                      <StyledTableCell align="right">WCGB</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                  {division.teams.map((mlbteam) => (
                      <StyledTableRow key={mlbteam.name}>
                      <StyledTableCell component="th" scope="row">
                        {mlbteam.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.w}</StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.l}</StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.gb}</StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.wc_rank}</StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.wc_gb}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </Grid>
            ))}   
            </Grid>                
            </Grid>
        </Container>
    );

    
}

export default MLBStand;