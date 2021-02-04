import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos';

const User = ({user, loading, getUser, getUserRepos, repos, match}) => {
    // componentDidMount(){
        // }
        
    useEffect(() => {
        getUser(this.props.match.params.login);
        getUserRepos(this.props.match.params.login);
    }, []);

        const {
            name,
            avatar_url,
            location,
            bio,
            company,
            blog,
            login,
            html_user,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user;

        if(loading){
            return(
                <Spinner />
            )
        }else{
            return (
                <Fragment>
                    <Link to="/" className="btn btn-light">Back to search</Link>
                    {hireable ? (<span><i className="fas fa-check text-success"/> Hireable</span>) : ( <span><i className="fas fa-times-circle text-danger"/> Not hireable</span> )}
                    <div className="card grid-2">
                        <div className="all-center">
                            <img src={avatar_url} alt={name} style={{width: '150px'}}/>
                            <h1>{name}</h1>
                            <p>Location: {location}</p>
                        </div>
                        <div>
                            {bio && (
                                <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            )}
                            <a href={html_user} className="btn btn-dark my-1">Visit Github profile</a>
                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong>Username: </strong> {login}
                                        </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                        <strong>Company: </strong> {company}
                                        </Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                        <strong>Website: </strong> {blog}
                                        </Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card text-center">
                        <div className="badge badge-primary">Followers: {followers}</div>
                        <div className="badge badge-success">following: {following}</div>
                        <div className="badge badge-light">Public repos: {public_repos}</div>
                        <div className="badge badge-dark">Public gists: {public_gists}</div>
                    </div>

                    <Repos repos={repos}/>
                </Fragment>
            )
        }
}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    trpod: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
}

export default User
