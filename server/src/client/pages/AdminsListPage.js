import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(
            admin => <li key={admin.id} className="collection-item">{admin.name}</li>
        );
    }

    render() {
        return (
            <div>
                <h3>Protected list of admins:</h3>
                <ul className="collection">{this.renderAdmins()}</ul>
            </div>
        );
    }
}

function mapStateToProps({ admins }) {
    return { admins };
}

export default {
    loadData: ({ dispatch }) => dispatch(fetchAdmins()),
    component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage)
};