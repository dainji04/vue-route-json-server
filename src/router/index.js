import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import JobsDetails from "../views/Jobs/JobsDetails.vue";
import ErrorPage from "../views/ErrorPage.vue";
import CompositionAPI from "../views/CompositionAPI.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "jobsDetails",
    component: JobsDetails,
    props: true, // pass through props
  },
  {
    path: "/:catchAll(.*)",
    name: "404-Error",
    component: ErrorPage,
  },
  {
    path: "/composition-api",
    name: "composition",
    component: CompositionAPI,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
