import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export const getSortedPostsData = () => {
  // Obtenga los nombres de los archivos en /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Eliminar ".md" del nombre del archivo para obtener la identificación
    const id = fileName.replace(/\.md$/, '')

    // Lee el archivo md como una cadena
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Usar gray-matter para analizar la sección de metadatos de la publicación
    const matterResult = matter(fileContents)

    // Combina los datos con el id
    return {
      id,
      ...matterResult.data
    }
  })
  // Ordenar publicaciones por fecha
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}


export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)

  // Devuelve una matriz que se ve así:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Usar gray-matter para analizar la sección de metadatos de la publicación
  const matterResult = matter(fileContents)

  // Usar remark para convertir el archivo md en un string HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // combinar los datos con el id y el contenido html
  return {
    id,
    contentHtml,
    ...matterResult.data
  }

}

