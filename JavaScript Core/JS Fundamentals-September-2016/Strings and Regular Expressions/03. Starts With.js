function exec([string, substring]) {
    return (string.substr(0, substring.length) == substring);
}
exec(['How have you been?', 'how'])

