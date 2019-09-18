import {
    getGradientColors,
    colorAdd,
    HexToHSL,
    HSLRotate,
    colorMinus
} from 'util/color-util';

describe('ColorUtil', () => {
    it('function colorAdd', () => {
        expect(colorAdd('#aaaaaa', '#333333')).toBe('#dddddd');
        expect(colorAdd([123, 34, 88], [34, 65, 22])).toBe('#9d636e');
        expect(colorAdd([240, 34, 188], [180, 65, 122])).toBe('#ff63ff');
    });

    it('function getGradientColors', () => {
        expect(getGradientColors('#aaaaaa', [1, 2, 6, 8])).toEqual([
            '#b8b8b8',
            '#bfbfbf',
            '#e6e6e6',
            '#f7f7f7'
        ]);
    });

    it('function HexToHSL', () => {
        expect(HexToHSL('#aaaaaa')).toEqual([0, 0, 66.7]);
        expect(HexToHSL('#fff')).toEqual([0, 0, 100]);
    });

    it('function HSLRotate', () => {
        expect(HSLRotate('#333333', [5, 5, 5])).toBe('#433d3d');
    });

    it('function colorMinus', () => {
        expect(colorMinus('#333333', [5, 5, 5])).toBe('#2e2e2e');
        expect(colorMinus('#bbbbbb', [17, 17, 17])).toBe('#aaaaaa');
    });
});
