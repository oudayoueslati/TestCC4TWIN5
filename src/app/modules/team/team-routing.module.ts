import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormTeamComponent } from 'src/app/components/form-team/form-team.component';
import { MyTeamsComponent } from 'src/app/components/my-teams/my-teams.component';
import { TeamsComponent } from 'src/app/components/teams/teams.component';

const routes: Routes = [
  {path : '', component :FormTeamComponent},
  {path : 'add', component :TeamsComponent},
  {path : 'my', component :MyTeamsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    FormsModule
  ]
})
export class TeamRoutingModule { }


