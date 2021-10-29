import Vue from 'vue'
import VueMeta from 'vue-meta'
import PortalVue from 'portal-vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue'


Vue.use(PortalVue)
Vue.use(VueMeta)
// Vue.mixin({ methods: { route: window.route } })
Vue.config.productionTip = false

InertiaProgress.init()

createInertiaApp({
  resolve: name => require(`./components/${name}`),
  setup({ el, App, props }) {
    new Vue({
        metaInfo:{
            titleTemplate: title => (title? `${title} - Laravel Inertia `: `Laravel Inertia`)
        },
      render: h => h(App, props),
    }).$mount(el)
  },
})