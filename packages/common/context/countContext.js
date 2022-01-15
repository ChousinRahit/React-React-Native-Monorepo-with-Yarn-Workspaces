import createDataContext from './createDataContext';

const countReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'POPULATE_USERS':
      return {
        ...state,
        users: payload,
      };
    case 'POPULATE_POSTS':
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

const getUsers = dispatch => async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const resData = await response.json();

    dispatch({ type: 'POPULATE_USERS', payload: resData });
  } catch (err) {
    console.log({ err });
  }
};
const getPosts = dispatch => () => {
  dispatch({ type: 'POPULATE_POSTS' });
};

export const { Provider, Context } = createDataContext(
  countReducer,
  {
    getUsers,
    getPosts,
  },
  {
    users: [],
    posts: [],
  }
);
