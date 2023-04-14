import { EventDay } from "../utils/enums";

export interface Event {
    event_name: string;
    event_description: string;
    event_image_id: string;
    day: EventDay;
}