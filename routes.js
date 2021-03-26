import e from "express";

//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//User
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos 
//  : 을 쓰면 express가 '바뀌는 값이구나'라고 인식한다. 즉, 변수로 인식함. 
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//userDetail: 인자 =>함수 
//id 등을 받을 때 쓰이는 기법. 
//header.pug에서 이 라우츠 함수의 인자에 가짜 데이터에서 가져온 id를 넣는 식으로 주소를 만드는 중이다. 
//mixin인 videoBlock.pug에서도 활동중. 
//이때는 3위일체 법칙을 기억하기: mixin(오브제에서 어떤 데이터를 참고할지만 말해줌)과 그 mixin이 끼어진 뷰(mixin이 어떤 데이터를 참고하는지 인지하고 오브제의 키와 값을 구성.)
//그리고 뷰는 
//pug에서는 a(href=routes.videoDetail(video.id)) 식으로 쓰인다.
//id가 있다면 제대로 된 주소를 리턴하지만, id가 없다면 id 가 없는 주소를 리턴한다.

const routes = {
    home: HOME, 
    join: JOIN, 
    login: LOGIN,
    logout: LOGOUT, 
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if(id){
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if(id){
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO 
}

export default routes;
