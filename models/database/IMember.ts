export interface IMember {
  playerMemberNumber: number;
  playerMemberName: string;
  type: MemberType;
  memberNumber: number;
  memberName?: string;
  lastSeen?: Date;
  chatRoomName?: string;
  chatRoomSpace?: string;
  creation?: Date;
  title?: string;
  dominant?: number;
  appearance?: string;
  description?: string;
  labelColor?: string;
  lovership?: IMemberLovership[];
  ownership?: IMemberOwnership;
  notes?: string;
}

export const MemberTypes = [
  'Member',
  'Friend',
  'Submissive',
  'Lover',
  'Owner'
] as const;

export type MemberType = typeof MemberTypes[number];

export const MemberTypeOrder = {
  Member: 0,
  Friend: 1,
  Submissive: 2,
  Lover: 3,
  Owner: 4
} as { [key in MemberType]: number; };

export interface IMemberLovership {
  memberNumber: number;
  name: string;
  start: Date;
  stage: number;
}

export interface IMemberOwnership {
  memberNumber: number;
  name: string;
  start: Date;
  stage: number;
}
