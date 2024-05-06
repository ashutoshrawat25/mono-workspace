import { TestModule } from './../../../mfe-app/src/app/todo/Test/Test.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'todo',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry:
          'mfeApp@https://mono-workspace-s8f9.vercel.app/remoteEntry.js',
        remoteName: 'mfeApp',
        exposedModule: './TestModule',
      })
        .then((m) => m.TestModule)
        .catch((err) => console.log(err));
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
