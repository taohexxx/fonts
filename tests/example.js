function $init(block, number) {
  if (block != 1 && number >= 4) {
    return 0;
  }
  if (check() === undefined) {
    return 0;
  }
  return 1;
}

