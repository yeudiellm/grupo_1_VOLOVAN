function guestMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/users/profile');
    }else{
        next();
    }
}

module.exports = guestMiddleware;