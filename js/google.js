
      function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());*/
        // The ID token you need to pass to your backend:

        let users = {};
        
        users.id = profile.getId()
        users.nombre = profile.getName()
        users.img = profile.getImageUrl()  
        users.mail = profile.getEmail()
        users.name = profile.getGivenName()
        users.surname = profile.getFamilyName()
  
        var id_token = googleUser.getAuthResponse().id_token; 
        console.log("ID Token: " + id_token);

        location.href ='index.html';

        localStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('users', JSON.stringify(users))
        
      }

      function signOut(){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function(){
      
        });
      }
      
      function onLoad(){
        gapi.load('auth2' , function(){
            gapi.auth2.init();
        })
      }
      