import routes from "./routes";

//라우트를 import하고 그걸 전부 쓸 수 있다. pug파일에서도 
//..왜냐하면 pug파일은 본래 js 파일이 아니기에, 이런 장치가 필요하다. 
//middleware인 만큼 next가 필요하다. 
//user.id 의 정보는 header.pug로 넘어간다. 
//
export const localMiddleware = (req, res, next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user= {
        isAuthenticated: true,
        id:1
        
    };
    next();
};
