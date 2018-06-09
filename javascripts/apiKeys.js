let firebaseConfig = {};

const setConfig = (fbconfig) =>
{
  firebaseConfig = fbconfig;
};

const apiKeys = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax('./db/apiKeys.json')
    .done((data) =>
    {
      resolve(data.apiKeys);
    })
    .fail((err) =>
    {
      reject(err);
    });
  });
};

const retrieveApiKeys = () =>
{
  apiKeys()
  .then((result) =>
  {
    setConfig(result.firebase);
    firebase.initializeApp(result.firebase);
    checkLoginStatus();
  })
  .catch((err) =>
  {
    console.error(err);
  })
};

retrieveApiKeys();
