import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreetingComponent } from './greeting/greeting.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'greeting/:name/:surname',
        component: GreetingComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'lessons',
        component: AllLessonsComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
    
];
