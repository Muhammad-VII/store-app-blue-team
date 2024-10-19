import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  dispatchEvent(eventName: string, data: any) {
    const event = new CustomEvent(eventName, { detail: data });
    window.dispatchEvent(event);
  }
}
