const PREFIX = 'CODINGSANS_EXAMPLE_';

export abstract class AbstractDao<T> {
  protected collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = PREFIX + collectionName;
  }

  abstract findAll(): T[];

  abstract findById(id: string): T;

  abstract create(data: Partial<T>): T;

  abstract updateById(id: string, data: Partial<T>): T;

  abstract removeById(id: string): void;
}
