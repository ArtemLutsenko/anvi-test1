import {createApp} from 'vue'
import App from './App.vue'

import placeholderDirective from './components/directives/placeholder'

const app = createApp(App)
app.directive('placeholder', placeholderDirective)

app.mount('#app')
