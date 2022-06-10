import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPost = () => {
    //// BAD APPROACH
    // const res = await jsonPlaceholder.get('/posts');

    // return {
    //     type: 'FETCH_POST',
    //     payload: res,
    // }

    return async (dispatch) => {
        const res = await jsonPlaceholder('/posts');

        dispatch({type: 'FETCH_POSTS', payload: res })
    }
}
