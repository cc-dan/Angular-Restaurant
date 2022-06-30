import { RouterModule } from '@angular/router'

// COMPONENTES
import { LoginComponent } from './login/login.component'

// ROUTES
const appRoutes = [
    { path: 'login', component: LoginComponent }
]

export default RouterModule.forRoot(appRoutes) // Crea un módulo con las rutas