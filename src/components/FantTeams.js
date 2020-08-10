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

function FantTeams(props) {

    const { teamInfo } = props;
    const classes = useStyles();

    return teamInfo && (
       <Container>
            <Grid className="main" container direction="column" justify-content="space-evenly" alignItems="center">
                <Grid item>
                    <h1>Teams</h1>
                </Grid>
            <List>
                {teamInfo.map ((team) => (
                    <ListItem><a href={`/fantasyteams#${team.name}`}>{team.name} </a></ListItem>
                ))}
            </List>
            <Grid item>
            {teamInfo.map((team) => (
                <Grid item>
                <Grid item>
                    <a id={`${team.name}`}>
                    <h2>{team.name}</h2>
                    </a>
                </Grid>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Team</StyledTableCell>
                      <StyledTableCell align="right">Wins</StyledTableCell>
                      <StyledTableCell align="right">Losses</StyledTableCell>
                      <StyledTableCell align="right">Win %</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                  {team.teams.map((mlbteam) => (
                      <StyledTableRow key={mlbteam.name}>
                      <StyledTableCell component="th" scope="row">
                        {mlbteam.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.wins}</StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.losses}</StyledTableCell>
                      <StyledTableCell align="right">{mlbteam.win_frac}</StyledTableCell>
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

export default FantTeams;