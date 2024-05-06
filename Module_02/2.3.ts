{
  const arr: Array<number> = [1, 2, 3, 4];
  const bool: Array<boolean> = [true, false];
  const str: Array<string> = ["a", "b"];

  type Generic<T> = Array<T>;
  const arr1: Generic<number> = [1, 2, 3];
  const str1: Generic<string> = ["a", "b", "c"];
  interface Tuple<X, Y> {
    0: X;
    1: Y;
  }
  const tuple: Tuple<string, string> = ["10", "abc"];
}
