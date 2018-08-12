import { find, findIndex } from 'lodash';
import { v4 } from 'uuid';
import { Person } from '../../store/reducers/people.reducer';
import { AbstractDao } from './abstract.dao';

const STORAGE = 'codingsans_example-storage';

export class PeopleDao extends AbstractDao<Person> {
  findAll() {
    return this._readAll();
  }

  findById(id: string) {
    const collection = this._readAll();
    const item = find(collection, (it) => it.id === id, null);

    if (!item) {
      throw new Error(`Item not found by id: ${id}`);
    }

    return item;
  }

  create(data: Partial<Person>) {
    const collection = this._readAll();
    const newObject = { ...data, id: v4() } as Person;
    this._writeAll([...collection, newObject]);
    return newObject;
  }

  updateById(id: string, data: Partial<Person>) {
    const collection = this._readAll();
    const itemIndex = findIndex(collection, (it) => it.id === id, null);

    if (itemIndex === -1) {
      throw new Error(`Item not found by id: ${id}`);
    }

    const newObject = { ...collection[itemIndex], ...data };

    this._writeAll([
      ...collection.slice(0, itemIndex),
      newObject,
      ...collection.slice(itemIndex + 1),
    ]);

    return newObject;
  }

  removeById(id: string) {
    const collection = this._readAll();
    const itemIndex = findIndex(collection, (it) => it.id === id, null);

    if (itemIndex === -1) {
      throw new Error(`Item not found by id: ${id}`);
    }

    this._writeAll(collection.filter(p => p.id !== id));
  }

  private _readAll(): Person[] {
    const collection = localStorage.getItem(STORAGE);
    if (collection) {
      return JSON.parse(collection);
    }
    return [];
  }

  private _writeAll(data: any[]) {
    localStorage.setItem(STORAGE, JSON.stringify(data));
  }
}
