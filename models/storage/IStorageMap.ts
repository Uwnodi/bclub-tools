import { IPlayer, ICharacter } from 'models/game';
import { IAccountQueryResultItem } from 'models';
import { IChatRoomSearchResult } from 'models/server-messages';

export const STORAGE_KEYS = [
  'chatRoomCharacter',
  'chatRoomSearchResult',
  'onlineFriends',
  'player'
] as const;

export type StorageKeys = typeof STORAGE_KEYS[number];

export interface IStorageMap {
  'chatRoomCharacter': ICharacter[];
  'chatRoomSearchResult': IChatRoomSearchResult[];
  'onlineFriends': IAccountQueryResultItem[];
  'player': IPlayer;
}