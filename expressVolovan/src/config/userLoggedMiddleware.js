const db = require("../database/models");

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        // console.log(res.locals.userLogged);
        return next();
    }

    let emailInCookie = req.cookies.userEmail;
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
        // console.log(res.locals.userLogged);
        return next();
    })
    .catch(error => res.send(error));
    }
    console.log(res.locals.userLogged);
    return next();
}

module.exports = userLoggedMiddleware;
