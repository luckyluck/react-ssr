import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from '../actions';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(
            user => <li key={user.id} className="collection-item">{user.name}</li>
        );
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App"/>
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                {this.head()}
                Here's a big list of users:
                <ul className="collection">{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

export default {
    loadData: ({ dispatch }) => dispatch(fetchUsers()),
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};