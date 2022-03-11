// eslint-disable-next-line @typescript-eslint/ban-types
export interface GenericContext<T, P = {}> {
  type: T;
  payload?: P;
}
