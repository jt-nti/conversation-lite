// The CredentialsPanel module.
/* eslint no-unused-vars: "off" */

var CredentialsPanel = (function() {
  // Publicly accessible methods defined
  return {
    getCredentials: getCredentials
  };

  // Initialize the module
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
}());
