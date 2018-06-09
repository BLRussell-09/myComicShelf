const checkLoginStatus = () =>
{
  firebase.auth().onAuthStateChanged((user) =>
  {
    if (user)
    {
      // User is signed in.
      setUID(user.uid)
      $('#login-page').addClass('hidden');
      $('#registration-page').addClass('hidden');
      $('#myComics-nav').removeClass('hidden')
      $('#searchbar-nav').removeClass('hidden');
      $('#myComicsPage').removeClass('hidden');
    }
    else
    {
      // No user is signed in.
      $('#login-page').removeClass('hidden');
      $('#registration-page').addClass('hidden');
      $('#myComicsPage').addClass('hidden');
      $('#searchbar-nav').addClass('hidden');
      $('#myComics-nav').addClass('hidden');
    }
  });
};
