function _refactorEmail($data, $refs) {
    let valid = true;
    $data.fromError = '';
    $data.toError = '';
    if ($refs.from.value) {
        if ($refs.from.value.includes('@') && !$refs.from.value.endsWith('@duck.com')) {
            $data.fromError = "Not a @duck.com email address";
            valid = false;
        }
    } else {
        valid = false;
    }
    if ($refs.to.value) {
        if (!$refs.to.value.includes('@')) {
            $data.toError = "Not an email address";
            valid = false;
        }
    } else {
        valid = false;
    }
    if (!valid) return;
    let s = $refs.from.value.split('@')[0];
    let p = $refs.to.value.replace('@', '_at_');
    $data.refactoredEmail = `${p}_${s}@duck.com`;
}

let onCopy = () => {alert('Copied to clipboard')}

const copy = (target) => {
    if (typeof target === 'function') {
        target = target()
    }

    if (typeof target === 'object') {
        target = JSON.stringify(target)
    }

    return window.navigator.clipboard.writeText(target)
        .then(onCopy)
}
