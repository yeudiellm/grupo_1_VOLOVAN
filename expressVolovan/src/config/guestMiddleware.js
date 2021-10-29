function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/users/profile');
    }else{
        return next();
    }
}

module.exports = guestMiddleware;