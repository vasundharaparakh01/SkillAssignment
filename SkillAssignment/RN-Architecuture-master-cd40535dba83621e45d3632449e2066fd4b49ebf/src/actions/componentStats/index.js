export const manageComponentStats = (
  componentId,
  screenName,
  componentStats,
) => {
  return dispatch => {
    let data = {...componentStats, [screenName]: componentId};
    // eslint-disable-next-line module-resolver/use-alias
    dispatch({type: 'componentStats', payload: data});
  };
};
