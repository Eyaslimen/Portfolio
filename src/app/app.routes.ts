import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { CozyComponent } from './cozy/cozy.component';
import { MindfuluComponent } from './mindfulu/mindfulu.component';
import { UnilivresComponent } from './unilivres/unilivres.component';
export const routes: Routes = [
{
        path:'',
        component:AboutComponent
},
{
    path:'about',
    component:AboutComponent
},
{
    path:'education',
    component:EducationComponent
},
{
    path:'skills',
    component:SkillsComponent
}, 
{
    path:'contact',
    component:ContactsComponent
},
{
    path:'projects',
    component:ProjectsComponent
},
{
    path:'cozy',
    component:CozyComponent
},
{
    path:'mindfulu',
    component:MindfuluComponent
},
{
    path:'unilivres',
    component:UnilivresComponent
}
];
