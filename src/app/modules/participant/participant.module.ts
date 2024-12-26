import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipantRoutingModule } from './participant-routing.module';
import { ParticipantsComponent } from '../../components/participants/participants.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantRoutingModule,
    FormsModule
  ]
})
export class ParticipantModule { }
