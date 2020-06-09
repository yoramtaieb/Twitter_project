let fs = require('fs')
fs.readFile('routes/router.js', 'utf8', (err, content) => {
    //si j'ai deja un require je fait un console log pour dire que je refuse de le faire
    if (content.indexOf(`require('./${process.argv[2]}/${process.argv[2]}.js')(app)`) > -1 || process.argv[2] == undefined || process.argv[2] == null) {
        console.log("\x1b[41m", 'route deja existante!', "\x1b[0m")
    } else {
        //write require in routes.js
        fs.writeFile('routes/router.js', content.replace('\}', `    require('./${process.argv[2]}/${process.argv[2]}.js')(app)\n}`))

        //je cree un dossier et un ficher de router dans la dossier routes
        createDocuments('./routes', process.argv[2], `module.exports = (app) => {\n\tapp.get('/${process.argv[2]}', (req, res)=>{\n\t\tres.render("${process.argv[2]}/${process.argv[2]}")\n\t})\n}`, 'js')
            //je cree un dossir et un ficher de vu dans le dossier views
        createDocuments('./views', process.argv[2], `<!DOCTYPE html>\n\t<html lang="en">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<title>${process.argv[2]}</title>\n\t</head>\n\t<body>\n\t\t<h1>page ${process.argv[2]}</h1>\n\t</body>\n</html>`, 'ejs')

    }
})

function createDocuments(path, name, content, extention) {
    fs.mkdir(`${path}/${name}`, (err) => {
        fs.writeFile(`${path}/${name}/${name}.${extention}`, content, (err) => {
            console.log("\x1b[42m", `fichier ${name}.${extention} créer!`, "\x1b[0m")
        })
    })
}