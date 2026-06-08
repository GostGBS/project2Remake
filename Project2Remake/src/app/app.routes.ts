import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Profile } from './components/profile/profile';
import { Mainpage } from './components/mainpage/mainpage';



export const routes: Routes = [

    { path: "", 
    component : Home  
    },

    {
        path: "signup",
        component : Signup
    },
    {
        path: "login",
        component : Login
    },

    {
        path: "profile",
        component : Profile
    },

    {
        path: "mainpage",
        component : Mainpage
    }
    
    
];
