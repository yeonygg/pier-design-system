import borderRadius from './border-radius';
import border from './border';
import color from './color';
import cursor from './cursor';
import disabled from './disabled';
import display from './display';
import ellipsis from './ellipsis';
import flex from './flex';
import float from './float';
import overflow from './overflow';
import pointerEvents from './pointer-events';
import position from './position';
import shadows from './shadows';
import sizing from './sizing';
import spacing from './spacing';
import text from './text';
import transform from './transform';
import userSelect from './user-select';
import verticalAlign from './vertical-align';
import zIndex from './z-index';

let utilitiesData = [];
utilitiesData.push(
    borderRadius,
    border,
    color,
    cursor,
    disabled,
    display,
    ellipsis,
    flex,
    float,
    overflow,
    pointerEvents,
    position,
    shadows,
    sizing,
    spacing,
    text,
    transform,
    userSelect,
    verticalAlign,
    zIndex
);

utilitiesData.sort(function (a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
});

export default utilitiesData;
