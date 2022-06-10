import jsonPlaceholder from "../apis/jsonPlaceholder"
import _ from 'lodash';

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
