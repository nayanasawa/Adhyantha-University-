import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { TrackComponent } from './track/track.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { UniverstiygalleryComponent } from './universtiygallery/universtiygallery.component';
import { AboutdepComponent } from './aboutdep/aboutdep.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {
        component: RegistrationComponent,
        path: 'myreg'

    },
    {
        component: TrackComponent,
        path: "trackcomp"
    },


    {
        component: ContactusComponent,
        path: 'Contact Us'
    },
    {
        component: LoginComponent,
        path: "login"
    },
    {
        component: UniverstiygalleryComponent,
        path: "Gallery"
    },

    {
        component: AboutdepComponent,
        path: "About all Departments"
    },
    {
        component: HomeComponent,
        path: "Home"
    },
    {
        component: AboutusComponent,
        path:"About US"
    }
];
