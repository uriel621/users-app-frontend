import React from 'react';
const user_list = (props) => {
    return (
        <div>
            { 
                props.users.map((user) => {
                    return (
                        <div key={ user.id }>{ user.username }</div>
                    )
                })
            }
        </div>
    )
}

export default user_list;