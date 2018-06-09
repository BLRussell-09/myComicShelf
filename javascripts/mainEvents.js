const buttonEvents = () =>
{
  // Register Button on Login Page
  $('#registration-link').click((e) =>
  {
    $('#login-page').addClass('hidden');
    $('#registration-page').removeClass('hidden');
  });

  // Sign-in Button on Register page
  $('#signin-link').click(() =>
  {
    $('#registration-page').addClass('hidden');
    $('#login-page').removeClass('hidden');

  })
};

const authEvents = () =>
{
  // Sign in Event
  $('#signin-button').click((e) =>
  {
    console.log('hey');
    e.preventDefault();
    const email = $('#inputEmail').val();
    const password = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {}).catch(function(error)
    {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  });

  // Logout Event
  $('#logout-nav-button').click((e) =>
  {
    firebase.auth().signOut().then(() =>
    {
      // Sign-out successful.
      $('#login-page').removeClass('hidden');
      $('#myComicsPage').addClass('hidden');
    })
    .catch((error) =>
    {
      // An error happened.
      console.error(error)
    });
  });

  // Register Event
  $('#registration-button').click(() =>
  {
    const email = $('#registerEmail').val();
    const password = $('#registerPassword').val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error)
    {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  });
};

buttonEvents();
authEvents();
