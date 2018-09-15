import React from 'react';

import { connect } from 'react-redux';

import WelcomeMessage from './WelcomeMessage';
import Overview from './Overview';
import Counter from './Counter';

const Home = (props) => {
    return(
        <div>
            <WelcomeMessage />
            <Overview user={props.user} sessions={props.sessions} />
            <Counter />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        sessions: state.session
    }
}

export default connect(mapStateToProps)(Home);