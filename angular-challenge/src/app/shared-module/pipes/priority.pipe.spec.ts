import { PriorityPipe } from './priority.pipe';

describe('PriorityPipe', () => {
  it('create an instance', () => {
    const pipe = new PriorityPipe();
    expect(pipe).toBeTruthy();
  });
  it('perform correct transform', () => {
    const pipe = new PriorityPipe();
    expect(pipe.transform(0)).toEqual('urgent')
  });
  it('should return indefined', () => {
    const pipe = new PriorityPipe();    
    expect(pipe.transform(4)).toBeUndefined()
  });
});
