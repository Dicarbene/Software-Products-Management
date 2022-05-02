const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const NotFound = () => import("./views/NotFound.vue");
const testView = () => import("./components/testView.vue");
const User = () => import("./views/User.vue");
const UserBoard = () => import("./views/UserBoard.vue");
const RepoBoard = () => import("./views/RepositoryBoard.vue");
const Repo = () => import("./views/Repository.vue");
const Code = () => import("./views/SingleCode.vue");
const Search = () => import("./views/Search.vue");
/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { //首页
    path: "/",
    component: Home,
    meta: { title: "Home" } 
  },
  { //搜索页
    path: "/search",
    component: Search,
    meta: {title: "Search Page"}
  },
  { //关于页
    path: "/about",
    meta: { title: "About" },
    component: About,
  },
  { //用户总版
    path: "/users",
    component: UserBoard,
    meta: { title: "Users Board" },
  },
  { //用户页
    path: "/user/:id",
    component: User,
    meta: { title: "User" },
  },
  { //仓库总版
    path: "/repos",
    component: RepoBoard,
    meta: { title: "Repository Board" },
  },
  { //仓库页
    path: "/repo/:id",
    component: Repo,
    meta: { title: "Repository" },
  },
  { //代码页
    path: "/repo/:repoid/:id",
    component: Code,
    meta: { title: "Code" },
  },
  { //404页
    path: "/:path(.*)",
    component: NotFound 
  },
  { //测试页
    path: "/testview",
    component: testView,
    meta: { title: "testView" },
  },
];
