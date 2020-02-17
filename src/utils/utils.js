const getLocalStorageToken = () => localStorage.getItem('token');

const setActivity = (activityId, activity) => {
  console.log('activityId, activity :', activityId, activity);
};

module.exports = {
  getLocalStorageToken,
  setActivity,
};
