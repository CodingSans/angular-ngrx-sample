export abstract class AbstractDao<T> {
  abstract findAll(): T[];

  abstract findById(id: string): T;

  abstract create(data: Partial<T>): T;

  abstract updateById(id: string, data: Partial<T>): T;

  abstract removeById(id: string): void;
}
