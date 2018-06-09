const checkLoginStatus = () =>
{
  firebase.auth().onAuthStateChanged((user) =>
  {
    if (user) {
      // User is signed in.
      setUID(user.uid)
      $('#login-page').addClass('hidden');
      $('#registration-page').addClass('hidden');
      $('#myComicsPage').removeClass('hidden');
    }
    else
    {
      // No user is signed in.
      $('#login-page').removeClass('hidden');
      $('#registration-page').addClass('hidden');
      $('#myComicsPage').addClass('hidden');
    }
  });
};
