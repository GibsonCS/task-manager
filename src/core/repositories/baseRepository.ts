export interface IBaseRepository<T> {
  save(item: T): Promise<T | undefined>;
}
