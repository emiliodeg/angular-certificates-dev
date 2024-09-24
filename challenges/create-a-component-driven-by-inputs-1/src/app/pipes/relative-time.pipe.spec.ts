import { RelativeTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {
  let pipe: RelativeTimePipe;

  beforeEach(() => pipe = new RelativeTimePipe())

  it('create an instance', () => expect(pipe).toBeTruthy());

  it('should return only minutes', () => {
    const mins = 59

    const result = pipe.transform(mins)

    expect(result).toContain(`${mins}`);
    expect(result).toContain('m');
  });

  it('should return only hours', () => {
    const mins = 120

    const result = pipe.transform(mins)

    expect(result).toContain(`${mins / 60}`);
    expect(result).toContain('h');
    expect(result).not.toContain(`${mins}`);
    expect(result).not.toContain('m');
  });

  it('should return hours and minutes', () => {
    const mins = 150

    const result = pipe.transform(mins)

    expect(result).toContain(`2`);
    expect(result).toContain('h');
    expect(result).toContain(`30`);
    expect(result).toContain('m');
  });
});
