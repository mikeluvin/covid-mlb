import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Grid className="main" container direction="column" justify-content="space-evenly" alignItems="center">
                    <Grid item>
                        <h1>Welcome to the COVID-19 MLB Fantasy League Website!</h1>
                    </Grid>
                    <Grid item>
                        <h3>
                            Just out here waiting for the season to get cancelled at this point tbh. What a shitshow.
                            Anyways, thanks to Luke for getting the league togther. I personally have not tried to figure
                            out the standings until I made this website, and I'm guessing no one else has either. Woo hoo.
                        </h3>
                        <h3>
                            This is also the first website I've ever made, so if you have feedback/suggestions for features
                            to add, just text me and I'll see if I can make them happen.
                        </h3>

                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Home;