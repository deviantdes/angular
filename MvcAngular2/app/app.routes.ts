import { DirectoryComponent } from "./directory/index";
import { Directory2Component } from "./directory2/index";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Component

const routes: Routes = [
    // Root
    { path: 'directory', component: DirectoryComponent },
    { path: 'directory2', component: Directory2Component }
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);