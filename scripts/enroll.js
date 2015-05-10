'use strict';
/*global define: false */

( function( window ) {

  function enroll (nameElmId, emailElmId, isMentor) {
    var name  = document.getElementById(nameElmId).value;
    var email = document.getElementById(emailElmId).value;
    var url   = 'https://jsbelgrade-mailchimp.herokuapp.com/nodeschool' +
                (isMentor ? '-mentor' : '') + '?email=' + email + '&name=' + name;

    ajax(url, function (response){
      console.log('OK', response);
      alert('You are sucessfully subscribed to the mailing list');
    }, function (response) {
      if (response.error) {
        alert(response.error);
      }
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


