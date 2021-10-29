const db = require("../database/models");

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.userEmail;
    console.log(emailInCookie);
    if(emailInCookie){
    db.Usuarios.findOne({
        where: {
            email: emailInCookie,
        }
    }).then(userFromCookie => {
        console.log(userFromCookie)
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
    }else{
        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }
        return next();  
    }
}

module.exports = userLoggedMiddleware;
