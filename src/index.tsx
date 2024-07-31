import { PicFromPackage } from './Pic';

function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { PicFromPackage, multiply };
