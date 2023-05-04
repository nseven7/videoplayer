import { makeAutoObservable } from 'mobx';
import {
  getAllEvents,
  createEvent,
  updateInfoEvent,
  getRegisteredUsersOnEvent,
  appointmentSchoolchildOnEvent,
  registerOnActivity,
  deleteEvent,
} from '../services/events';
import { isSearchEvent } from '../utils/searchEvents';
import authStore from './auth';

class EventsStore {
  events = [];
  filteredEvents = null;
  query = '';

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRegisteredStudent(eventId) {
    if (authStore.isAdmin) {
      const users = await getRegisteredUsersOnEvent(eventId);
      this.events.find((event) => event.id === eventId).users = users;
      return users;
    }
  }

  async fetchEvents() {
    const events = await getAllEvents();
    this.events = events;
    if (!this.filteredEvents) {
      this.filteredEvents = events;
    }
    return this.events;
  }

  async createEvent(event) {
    await createEvent(event);
    this.events = await getAllEvents();
    await this.searchEvents(this.query);
  }

  async checkUsers(userId, eventId) {
    const result = await appointmentSchoolchildOnEvent(userId, eventId);
    return result;
  }

  async searchEvents(query) {
    this.query = query;
    this.filteredEvents = this.events.filter((e) => isSearchEvent(e, query));
  }

  async removeEvent(eventId) {
    await deleteEvent(eventId);
    this.events = await getAllEvents();
    await this.searchEvents(this.query);
  }

  async changeEvent(event) {
    await updateInfoEvent(event);
    this.events = await getAllEvents();
    await this.searchEvents(this.query);
  }

  async registerStudent(schoolId, activityId) {
    await registerOnActivity(schoolId, activityId);
  }
}

export default new EventsStore();
