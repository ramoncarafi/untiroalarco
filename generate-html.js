const fs = require('fs');
const ejs = require('ejs');

// Carga y compila la plantilla EJS
const template = fs.readFileSync('views/home.ejs', 'utf-8');
const compiledTemplate = ejs.compile(template);

// Define los datos que necesitas para la plantilla (si los hay)
const data = {
  pageTitle: 'Tu título aquí'
  // Agrega otros datos aquí si es necesario
};

// Genera el contenido HTML
const htmlContent = compiledTemplate(data);

// Guarda el contenido HTML en un archivo
fs.writeFileSync('index.html', htmlContent);

console.log('Archivo HTML generado exitosamente.');
