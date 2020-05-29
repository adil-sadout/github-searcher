import React from 'react';
import PropTypes from 'prop-types';

function UserItem ({user: {login,html_url,avatar_url}}){

        return(
            <div className="card text-center">
                <img className="round-img" style={{width:"60px"}} src={avatar_url}/>
                <h3>
                    {login}
                </h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>

            </div>
        );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};




export default UserItem;