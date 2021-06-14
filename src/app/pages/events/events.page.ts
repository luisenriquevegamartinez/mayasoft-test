import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsDB } from 'src/app/DataStructure/DB/eventsDB';
import { InstructorsDB } from 'src/app/DataStructure/DB/InstructorsDB';
import { Event } from 'src/app/DataStructure/Models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  eventsDB = EventsDB.getInstance();
  events: Event[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.events = this.eventsDB.getEvents(Number(id));
  }

  handleClick() {
    this.eventsDB.addEvent(
      new Event({
        type: 'theorical',
        date: new Date(),
        start: {
          hours: 12,
          minutes: 2
        },
        end: {
          hours: 12,
          minutes: 2
        },
        description: '2143',
        instructorId: InstructorsDB.getInstance().getInstructors()[0].id,
      })
    );
  }
}
