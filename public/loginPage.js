"use strict";

const userForm = new UserForm();
userForm.loginFormCallback = data => ApiConnector.login(data, function(response){
    if (response.success) {
        location.reload();
        return;
    } else {
        let error=new Error("Ошибка");
            throw error;
    }
});

userForm.registerFormCallback = data => ApiConnector.register(data, function(response){
    if (response.success) {
        location.reload();
        return;
    } else {
        throw new Error(response.error);
    }
})