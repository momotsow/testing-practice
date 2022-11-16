const reverse = require('./reverse');

test('reversed string', () => {
    expect(reverse('sing')).toBe('gnis');
})
test('reversed string', () => {
    expect(reverse('welcome back')).toBe('kcab emoclew');
})
test('reversed string', () => {
    expect(reverse('stressed')).toBe('desserts');
})