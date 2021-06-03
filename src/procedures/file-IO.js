export function getFileName(file) {
  if (file.name.includes('.')) {
    let fileName = '';

    for (let i = 0; i < file.name.length; i++) {
      const char = file.name[i];

      if (char === '.') break;

      fileName += char;
    }

    return fileName;
  }

  return file.name;
}
