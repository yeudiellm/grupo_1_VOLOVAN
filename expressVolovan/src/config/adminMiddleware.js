function adminMiddleware(req, res, next) {
    if(!( req.session.userLogged  && req.session.userLogged.esAdmin)){
        return res.redirect('/');
    }else{
        return next();
    }
}

module.exports = adminMiddleware;