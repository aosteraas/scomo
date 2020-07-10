var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
var style = {
    position: 'fixed',
    right: 0,
    bottom: -110,
};
var getStyle = function (that) {
    var bottom = that ? 0 : -110;
    return __assign(__assign({}, style), { bottom: bottom });
};
var talkStyle = {
    position: 'relative',
    padding: '1.6rem',
    background: '#404040',
    color: '#f9f9f9',
    borderRadius: '0.5575rem',
};
var getTalkStyle = function (that) {
    var display = that ? 'block' : 'none';
    return __assign(__assign({}, talkStyle), { position: 'relative', display: display });
};
var closeStyle = {
    position: 'absolute',
    right: '0.6rem',
    top: '50%',
    transform: 'translateY(-50%)',
    // fontWeight: 'bolder',
    cursor: 'pointer',
};
export default function Scomo(props) {
    var imgsrc = props.imgsrc, imgwidth = props.imgwidth, imgalt = props.imgalt;
    var _a = React.useState(''), that = _a[0], setThat = _a[1];
    React.useEffect(function () {
        document.addEventListener('mouseup', handleThat);
        return function () { return document.removeEventListener('mouseup', handleThat); };
    });
    function handleThat() {
        if (document.getSelection !== null) {
            return;
        }
        var selection = document.getSelection
            ? // @ts-ignore
                document.getSelection().toString()
            : // @ts-ignore
                document.selection.createRange().toString();
        setThat(selection);
    }
    return (React.createElement("div", { style: getStyle(that) },
        React.createElement("div", { style: getTalkStyle(that) },
            "How good's ",
            that,
            "?",
            ' ',
            React.createElement("div", { style: closeStyle, onClick: function () { return setThat(''); } }, "X"),
            ' '),
        React.createElement("img", { src: imgsrc, width: imgwidth || 320, alt: imgalt })));
}
//# sourceMappingURL=index.js.map