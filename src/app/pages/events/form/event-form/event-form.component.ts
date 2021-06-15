import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import {
  Event,
  EVENTS_TYPES,
  IEvent,
} from 'src/app/DataStructure/Models/Event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  @Input() event: Event;

  eventTypes = EVENTS_TYPES;
  formulario: FormGroup;
  constructor(
    private modalController: ModalController,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildFrom();
  }

  buildFrom() {
    this.formulario = this.fb.group({
      type: [this.event.type, Validators.required],
      date: [this.parseDate(this.event.date), Validators.required],
      start: [this.event.start.toString, Validators.required],
      end: [this.event.end.toString, Validators.required],
      description: [this.event.description, Validators.required],
      instructorId: [this.event.instructorId, Validators.required],
      id: [this.event.id, Validators.required],
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.formulario.value);
  }

  parseDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  //TODO: fix the CRUD events
  //TODO: fix factorys events
  //TODO: make function for validat no overload events that have the same type
}
