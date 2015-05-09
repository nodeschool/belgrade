'use strict';
/*global define: false */

( function( window ) {

  function enroll (nameElmId, emailElmId, isMentor) {
    var name = document.getElementById(nameElmId).value;
    var email = document.getElementById(emailElmId).value;
    var url = 'https://us10.api.mailchimp.com/2.0/lists/subscribe.json?apikey=fa6c621566b59fdf712ca59ada1c2bbf-us10&id=' +
      (isMentor ? 'cdeb4a431c' : '257847b2d9') + '&email[email]=' + email + '&merge_vars[FNAME]=' + name + '&double_optin=false&send_welcome=false';

    ajax(url, function (response){
      console.log(response);
    });
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( enroll );
  } else {
    // browser global
    window.enroll = enroll;
  }
})( document );


