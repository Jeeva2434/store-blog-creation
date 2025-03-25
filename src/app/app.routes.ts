import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        loadComponent: ()=>import('./pages/home/home.component').then(h=>h.HomeComponent)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'aboutUs',
        loadComponent: ()=>import('./pages/about/about.component').then(a=>a.AboutComponent),
        data:{
            "title":"Uniform"
        }
    },
    {
        path:'contactUs',
        loadComponent: ()=>import('./pages/contact/contact.component').then(c=>c.ContactComponent),
        data:{
            "title":"Contact Us"
        }
    },
    {
        path:'enquiry',
        loadComponent: ()=>import('./pages/enquiry/enquiry.component').then(e=>e.EnquiryComponent),
        data:{
            "title":"Enquiry"
        }
    },
    {
        path:'gallery',
        loadComponent : ()=>import('./pages/gallery/gallery.component').then(g=>g.GalleryComponent),
        data:{
            "title":"Gallery"
        }
    },
    {
        path:'our-products',
        loadComponent: ()=> import('./pages/products/products.component').then(p=>p.ProductsComponent),
        data:{
            "title":"Our Products"
        }
    },
    {
        path:'testimonials',
        loadComponent: ()=> import('./pages/testimonials/testimonials.component').then(t => t.TestimonialsComponent),
        data:{
            "title":"Testimonials"
        }
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
