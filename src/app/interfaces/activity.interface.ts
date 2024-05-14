import { LeadInterface } from "./lead.interface";
import { UserInterface } from "./user.interface";

export interface ActivityInterface {
  _id: string;
  title: string;
  notes: string;
  user: UserInterface
  lead: LeadInterface
  createdAt: Date
}
