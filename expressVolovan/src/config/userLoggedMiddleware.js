const db = require("../database/models");

function userLoggedMiddleware(req, res, next) {

    if(res.locals.isLogged){
        return next();
    }
    res.locals.isLogged = false;

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        return next();
    }

    let emailInCookie = req.cookies.userEmail;
    console.log(emailInCookie);
    if(emailInCookie){
    db.Usuarios.findOne({
        where: {
            email: emailInCookie,
        }
    }).then(userFromCookie => {
        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }
        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }

        return next();
    })
    .catch(error => res.send(error));
    }

    return next();
}

module.exports = userLoggedMiddleware;
