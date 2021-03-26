//default export 할 때는..
// import { routes } from "../routes" 이런 식으로 import하지 않는다. 
// 아래 방식으로 import한다. 
import {videos} from "../db"
import routes from "../routes"

//컨트롤러 추가 
//서식: export const 상수 = 변수 => 결과  
//form을 사용하면? 암시적 리턴을 더 이상 사용할 수 없다. 
//req.query.term을 찾아내서 적은 것이다. 
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

//이상하다. 이건 post방식이 아니어도 그냥 단순히 가져올 수 있는 것인가?
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

//비디오 업로드: 
//1)사용자가 비디오 업로드 2) 새로운 아이디 반환 3) 업로드 후 사용자를 업로드한 비디오의 videoDetail 페이지로 이동(redirect)
//이때 물론 routes에는 함수가 있다. 
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
  
export const postUpload = (req, res) => {
  const {
    body: {file, title, description}
  } =req;
  //Todo: upload and save video
  res.redirect(routes.videoDetail(3241243));
};



  export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });