import jsonPlaceholder from "../apis/jsonPlaceholder"
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    userIds.forEach(id => {dispatch(fetchUser(id))});
};

export const fetchPost = () => {
    //// BAD APPROACH
    // const res = await jsonPlaceholder.get('/posts');

    // return {
    //     type: 'FETCH_POST',
    //     payload: res,
    // }

    return async (dispatch) => {
        const {data} = await jsonPlaceholder('/posts');

        dispatch({type: 'FETCH_POSTS', payload: data })
    }
}

export const fetchUser = (id) => {
    return async (dispatch) => {
        const {data} = await jsonPlaceholder.get(`/users/${id}`)

        dispatch({type: 'FETCH_USER', payload: data })
    }
}

// export const fetchUser = (id) => {
//     return (dispatch) => { _fetchUser(id, dispatch)}
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const {data} = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({type: 'FETCH_USER', payload: data })
// })