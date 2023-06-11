import { EventEmit } from './index';

describe('EventEmit', () => {
  let eventEmit: EventEmit;

  beforeEach(() => {
    eventEmit = new EventEmit();
  });

  test('should subscribe to an event and emit it', () => {
    const callback = vi.fn();
    const subscription = eventEmit.subscribe('event', callback);

    eventEmit.emit('event', 'arg1', 'arg2');

    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
    expect(callback).toHaveBeenCalledTimes(1);

    subscription.destroy();
    eventEmit.emit('event', 'arg3');

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should throw an error when emitting an unknown event', () => {
    expect(() => {
      eventEmit.emit('unknown');
    }).toThrow('Event "unknown" not found');
  });
});