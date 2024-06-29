function _refactorEmail($data, $refs) {
    if (!$refs.from.value.includes('@')) return;
    if (!$refs.to.value.includes('@')) return;
    let s = $refs.from.value.split('@')[0];
    let p = $refs.to.value.replace('@', '_at_');
    $data.refactoredEmail = `${p}_${s}@duck.com`;
}