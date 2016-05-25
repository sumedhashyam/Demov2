app.service('Authentication', function ($localStorage, $state, $q) {

    this.login = function (email, password) {
        var deferred = $q.defer();

        var auth = {};
        auth.grant_type = "password";
        auth.username = email;
        auth.password = password;

        var result = true;
        var user = {};

        if (auth.username == "admin@gmail.com" && auth.password == "admin123") {

            
            user.id = 1;
            user.username = auth.username;
            user.firstname = "sumedha";
            user.lastname = "admin";

            var roles = "admin,user";
            this.setLoggedInUser(user);
            this.setUserRoles(roles);
            deferred.resolve(user);
        }
        else {
            deferred.reject(user);
        }

        return deferred.promise;
    };
    this.setLoggedInUser = function (user) {
        $localStorage.loggedInUser = user;
    };

    this.setUserRoles = function (roles) {
        if (roles && roles.length > 0) {
            $localStorage.loggedInUser.roles = roles;
        }
    };
});