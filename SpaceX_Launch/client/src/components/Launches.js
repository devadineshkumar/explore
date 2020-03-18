import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_success
            launch_date_local
            launch_year
        }
    }`

export class Launches extends Component {
    render() {
        return (
            <Fragment>
            <div>
                <h1 className="display-4 my-3">Launches</h1>
                <MissionKey/>
                <Query query={LAUNCHES_QUERY}>
                {
                    ({loading, error, data}) => {
                        if(loading) return <h4>Loading...</h4>
                        if(error) return console.log("Error while fetching data : "+error);
                        //console.log(data);
                        return <Fragment>
                           {
                               data.launches.map( (launchitem) => (
                                <LaunchItem key={launchitem.flight_number} launch={launchitem} />
                               ))
                           }
                        </Fragment>;
                    }
                }
                </Query>
            </div>
            </Fragment>
        )
    }
}

export default Launches
