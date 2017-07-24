// The CredentialsPanel module.
/* eslint no-unused-vars: "off" */

var CredentialsPanel = (function() {
  // Publicly accessible methods defined
  return {
    init: init,
    getCredentials: getCredentials
  };

  // Initialize the module
  function init() {
    processQueryParams();
  }

  function getCredentials() {
    var workspaceId = document.getElementById('workspaceInput').value;
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    if (workspaceId && username && password) {
      return {
        workspaceId: workspaceId,
        username: username,
        password: password
      }
    }

    return undefined;
  }

  function setCredentials(credentials) {
    if (credentials.workspaceId) {
      document.getElementById('workspaceInput').value = credentials.workspaceId;
    }

    if (credentials.username) {
      document.getElementById('usernameInput').value = credentials.username;
    }

    if (credentials.password) {
      document.getElementById('passwordInput').value = credentials.password;
    }
  }

  function processQueryParams() {
    var urlParams = new URLSearchParams(window.location.search);
    var credentials = {};

    credentials.username = urlParams.get('username');
    credentials.password = urlParams.get('password');
    credentials.workspaceId = urlParams.get('workspaceId');

    setCredentials(credentials);
  }
}());
