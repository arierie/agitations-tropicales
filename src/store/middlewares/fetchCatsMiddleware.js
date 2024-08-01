const fetchCatsMiddleware = store => next => action => {
  if (action.payload && action.payload instanceof Promise) {
    store.dispatch({type: `${action.type}_PENDING`});

    action.payload
      .then(result => {
        store.dispatch({type: `${action.type}_FULFILLED`, payload: result});
      })
      .catch(error => {
        store.dispatch({
          type: `${action.type}_REJECTED`,
          payload: error,
          error: true,
        });
      });

    return;
  }

  return next(action);
};

export default fetchCatsMiddleware;
