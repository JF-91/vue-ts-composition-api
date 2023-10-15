import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "@tanstack/vue-query";
import './store'


const app = createApp(App)

//app.use(VueQueryPlugin)
VueQueryPlugin.install(app,{
    queryClientConfig:{
        defaultOptions:{
            queries:{
                //quierys se mantendran 2 minutos
                cacheTime: 1000*120, //2 min
                refetchOnReconnect: 'always',
                

            }
        }
    }
})
app.use(router)

app.mount('#app')
