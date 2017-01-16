import React, { Component, PropTypes } from 'react';
import zip from 'lodash/zip';
import { connect } from 'react-redux';
import { loadUser, loadStarred } from '../actions';
import User from '../components/User';
import Repo from '../components/Repo';
import List from '../components/List';

// eslint-disable-next-line no-shadow
const loadData = ({ login, loadUser, loadStarred }) => {
  loadUser(login, ['name']);
  loadStarred(login);
};

class UserPage extends Component {
  static propTypes = {
    login: PropTypes.string.isRequired,
    user: PropTypes.shape,
    starredPagination: PropTypes.shape,
    starredRepos: PropTypes.shape.isRequired,
    starredRepoOwners: PropTypes.shape.isRequired,
    loadStarred: PropTypes.func.isRequired
  }

  componentWillMount() {
    loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.props.login) {
      loadData(nextProps);
    }
  }

  handleLoadMoreClick = () => {
    this.props.loadStarred(this.props.login, true);
  }

  // eslint-disable-next-line class-methods-use-this
  renderRepo([repo, owner]) {
    return (
      <Repo
        repo={repo}
        owner={owner}
        key={repo.fullName} />
    );
  }

  render() {
    const { user, login } = this.props;
    if (!user) {
      return <h1><i>Loading {login}{'\'s profile...'}</i></h1>;
    }

    const { starredRepos, starredRepoOwners, starredPagination } = this.props;
    return (
      <div>
        <User user={user} />
        <hr />
        <List renderItem={this.renderRepo}
          items={zip(starredRepos, starredRepoOwners)}
          onLoadMoreClick={this.handleLoadMoreClick}
          loadingLabel={`Loading ${login}'s starred...`}
          {...starredPagination} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = ownProps.params.login.toLowerCase();

  const {
    pagination: { starredByUser },
    entities: { users, repos }
  } = state;

  const starredPagination = starredByUser[login] || { ids: [] };
  const starredRepos = starredPagination.ids.map(id => repos[id]);
  const starredRepoOwners = starredRepos.map(repo => users[repo.owner]);

  return {
    login,
    starredRepos,
    starredRepoOwners,
    starredPagination,
    user: users[login]
  };
};

export default connect(mapStateToProps, {
  loadUser,
  loadStarred
})(UserPage);
