import { describe, it, expect } from 'vitest';
import { unique, groupBy, chunk, deepClone, memoize, counter } from '../src/functions.js';
import { Store, SortedStore } from '../src/Store.js';

describe('Лабораторная 4 — Тесты функций', () => {
  it('1. unique() удаляет дубликаты', () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it('2. unique() обрабатывает пустой массив', () => {
    expect(unique([])).toEqual([]);
    expect(unique(null)).toEqual([]);
  });

  it('3. groupBy() группирует объекты по ключу', () => {
    const data = [{ type: 'a', val: 1 }, { type: 'a', val: 2 }, { type: 'b', val: 3 }];
    expect(groupBy(data, i => i.type)).toEqual({
      a: [{ type: 'a', val: 1 }, { type: 'a', val: 2 }],
      b: [{ type: 'b', val: 3 }]
    });
  });

  it('4. chunk() разбивает массив на части', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('5. chunk() при нулевом/отрицательном размере возвращает []', () => {
    expect(chunk([1, 2], 0)).toEqual([]);
  });

  it('6. deepClone() копирует объекты и Date', () => {
    const date = new Date();
    const obj = { a: 1, b: { c: date } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b.c).not.toBe(date);
  });

  it('7. memoize() кэширует результаты вычислений', () => {
    let calls = 0;
    const fn = (x) => { calls++; return x * 2; };
    const memoed = memoize(fn);
    expect(memoed(5)).toBe(10);
    expect(memoed(5)).toBe(10);
    expect(calls).toBe(1);
  });

  it('8. counter() инкрементирует и декрементирует', () => {
    const c = counter(5);
    expect(c.inc()).toBe(6);
    expect(c.dec()).toBe(5);
    expect(c.value()).toBe(5);
  });
});

describe('Лабораторная 4 — Тесты классов Store и SortedStore', () => {
  it('9. Store считает total и добавляет элементы', () => {
    const store = new Store();
    store.add({ name: 'Apple', price: 100, qty: 3 });
    expect(store.total()).toBe(300);
    expect(store.count).toBe(1);
  });

  it('10. Store генерирует ошибку при неверных типах', () => {
    const store = new Store();
    expect(() => store.add({ name: 'Bad' })).toThrow();
  });

  it('11. Статический метод createDefaultStore работает', () => {
    const store = Store.createDefaultStore();
    expect(store.total()).toBe(30);
  });

  it('12. SortedStore корректно наследует и использует super', () => {
    const store = new SortedStore();
    store.add({ name: 'Banana', price: 50, qty: 2 });
    expect(store.total()).toBe(100);
  });
});