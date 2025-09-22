import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './routes/HomeView.vue'
import PostsView from './routes/PostsView.vue'
import PostView from './routes/PostView.vue'
import CreatePostView from './routes/CreatePostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      component: HomeView,
      path: '/',
    },
    {
      name: 'posts',
      component: PostsView,
      path: '/posts',
    },
    {
      name: 'post',
      component: PostView,
      path: '/post/:id',
    },
    {
      name: 'createPost',
      component: CreatePostView,
      path: '/create-post',
    }
  ],
})

export default router
