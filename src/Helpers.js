function buttonClassNamer(button) {
    if (button === '=') {
        return 'equals';
    } else if (typeof button === 'string') {
        return 'op';
    } else {
        if (button % 2 === 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }
}

export default buttonClassNamer;