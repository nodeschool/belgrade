function ajax (url, callback, errorCallback) {
  var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');


  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status < 300) {
      callback(xmlhttp.responseText);
    } else {
      errorCallback(xmlhttp.responseText);
    }
  };

  xmlhttp.open('GET', encodeURI(url), true);
  xmlhttp.send();
}
