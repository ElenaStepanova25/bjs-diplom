const logoutButton = new LogoutButton();

logoutButton.action = () => ApiConnector.logout(function(response){
    if (response.success) {
        location.reload();
        return;
    } else {
        userForm.setLoginErrorMessage("Не удалось выйти из личного кабинета");
    }
});