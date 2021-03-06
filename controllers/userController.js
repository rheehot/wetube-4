//export: 내보낸다.
//const: 상수
// (req, res) : request와 response. 유저에게 요청받은 결과, 유저에게 응답한 결과 
//render: 페이지를 만듬 
// {pageTitle: "Join"} :이른바 단순변수. 왜냐하면 각 페이지는 다르니까, 해당 .pug 에서 잘 쓰일 예정. 
//console.log(req.body) : 유저에게 요청한 결과의body값-- bodyparser(지금은 내장되어 있음.)가 필요한 이유. 

import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join"});
};

export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;
    if (password !==password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join"});
    } else {
        res.redirect(routes.home);
    }
    console.log(name);
};

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "Log In"});
};

export const postLogin = (req, res) => {
    res.redirect(routes.home)
};
export const logout = (req, res) => {
    //Todo : process log out
    res.redirect(routes.home)
}
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password");