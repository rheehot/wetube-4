// babel을 사용하면 const express = require('express') 를 다음과 같이 최신으로 바꿈

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes"
import { localMiddleware } from "./middlewares";

const app =express()

//viiew
app.set('view engine', 'pug')

//*res.send('hello from home') : 응답을 보내준다. ' hello from home'이라는. 

//미들웨어 추가 : 중간에 있는 놈들은 늘 세 번째 변수, next를 붙여준다. 그리고 함수 안에 next()를 붙여준다.
//..즉. 마지막 함수가 무언가를 리턴해준다. 
//웹사이트에서 일어나는 모든 일에 대해서 사용함
//실행 순서가 몹시 중요하다. 쓰고 싶은 미들웨어를 앞에 두고 뒤에 라우트를 둔다.
//..미들웨어보다 앞서서 나온 라우트에는 미들웨어가 실행되지 않는다. 
app.use( helmet({ contentSecurityPolicy: false })); 
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

//local 변수를 global 변수로 사용 가능하게 만들어줌.
app.use(localMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

//누군가가 내 파일을 불러올 때(import) app object를 준다.
export default app;