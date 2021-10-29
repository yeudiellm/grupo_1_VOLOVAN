function authMiddleware(req, res, next) {
    if(!req.session.userLogged){
        return res.redirect('/users/login');
    }else{
        return next();
    }
}

module.exports = authMiddleware;