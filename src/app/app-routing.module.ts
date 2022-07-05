import { RouterModule } from '@angular/router'
import { LoginGuard } from './login.guard'

// COMPONENTES
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'

// ROUTES
const appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [LoginGuard] }
]

export default RouterModule.forRoot(appRoutes) // Crea un módulo con las rutas