function startApp() {
    hideShowMenuLinks();
    if(isUserLoggedIn()){
        showUserHomeView();
        showUserGreeting();
    }else{
        showAppHomeView();
    }
};