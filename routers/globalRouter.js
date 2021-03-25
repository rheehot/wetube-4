//globalRouoter란? : 루트와 함수를 묶어놓음. 동시에 분류의 역할도 함. 
//...ex> user/user-home 등의 경우 user라우트에 user-home이 정의된 식. 
//import~~ : 들여온다.
//express: 익스프레스 프레임워크
//routes: 라우트--루트가 필요.
//video와 user controller : 함수들을 정의해 놓음. 


import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getJoin, login, logout, postJoin } from "../controllers/userController";

const globalRouter = express.Router();


//루트와 함수를 동시에 묶어놓음
//get은 단순 페이지를 가져오는 것.
//post는 유저의 정보를 가져오는 것. req와 밀접한 관련 있음. 
//join페이지는 

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;