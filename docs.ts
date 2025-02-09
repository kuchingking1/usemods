//bun run --watch mods.ts

import * as fs from 'fs'
import * as path from 'path'

// Define the directory path
const directoryPath = path.resolve('./utils/')

// Get a list of all files in the directory
const files = fs.readdirSync(directoryPath)

// Filter the list to only include .ts files
const tsFiles = files.filter((file) => path.extname(file) === '.ts')

// Loop through each .ts file
tsFiles.forEach((tsFile) => {
  // Define the path of the TypeScript file
  const tsFilePath = path.resolve(directoryPath, tsFile)

  // Read the content of the TypeScript file
  const tsContent = fs.readFileSync(tsFilePath, 'utf-8')

  // Define a regex pattern to match JSDoc comments and function declarations
  const functionPattern = /\/\*\*[\s\S]*?\*\/\s*export function [a-zA-Z0-9_]+\s*\([^)]*\)\s*{[\s\S]*?}/gm

  // Define a regex pattern to match the subtitle
  const subtitlePattern = /\/\/ <subtitle>[\s\S]*?\/\/ <\/subtitle>/gm

  // Find all functions with their JSDoc comments in the TypeScript file
  const functions = (tsContent.match(functionPattern) || []).map((match) => ({
    match,
    position: tsContent.indexOf(match)
  }))

  const subtitles = (tsContent.match(subtitlePattern) || []).map((match) => ({
    match,
    position: tsContent.indexOf(match)
  }))

  const matches = [...functions, ...subtitles].sort((a, b) => a.position - b.position)

  // Initialize the Markdown content for this file
  let markdownContent = ''

  // Extract the page title and description from the top page comments
  const pageTitleMatch = tsContent.match(/\/\/\s+title:\s+([^\r\n]*)/)
  const pageDescriptionMatch = tsContent.match(/\/\/\s+description:\s+([^\r\n]*)/)

  if (pageTitleMatch) {
    markdownContent += `# ${pageTitleMatch[1]}\n\n`
  }

  if (pageDescriptionMatch) {
    markdownContent += `#### ${pageDescriptionMatch[1]}\n\n`
  }

  // Check if any functions were found
  if (matches) {
    // Loop through each function and extract information
    matches.forEach((item) => {
      // Check if the string has the subtitle pattern
      if (item.match.startsWith('// <subtitle>')) {
        // Extract the subtitle using a regular expression
        const subtitleMatch = /\/\/ subtitle: (.+?)\s*\/\/\s*/.exec(item.match)
        const subtitle = subtitleMatch ? subtitleMatch[1].trim() : ''

        // Extract the description using a regular expression
        const descriptionMatch = /\/\/ description: (.+?)\s*\/\/\s*<\/subtitle>/s.exec(item.match)
        const description = descriptionMatch ? descriptionMatch[1].trim() : ''

        // Add the subtitle as H3 in markdown
        if (subtitle) {
          markdownContent += `## ${subtitle}\n\n`
        }

        // Add the description as a paragraph in markdown
        if (description) {
          markdownContent += `##### ${description}\n\n`
        }
      } else {
        // Extract the function name
        const functionNameMatch = /function\s+([a-zA-Z0_9_]+)/.exec(item.match)
        const functionName = functionNameMatch ? functionNameMatch[1] : ''

        // Extract the JSDoc comment
        const jsDocCommentMatch = /\/\*\*[\s\S]*?\*\//.exec(item.match)
        const jsDocComment = jsDocCommentMatch ? jsDocCommentMatch[0] : ''

        // Extract the description from the JSDoc comment
        const description = jsDocComment
          .split('\n')
          .map((line) =>
            line
              .trim()
              .replace(/\/?\*+/g, '')
              .trim()
          )
          .filter((line) => !line.startsWith('@'))
          .join(' ')
          .replace(/\/$/, '')
          .trim()

        // Extract the example usage from the JSDoc comment
        const example = (jsDocComment.match(/@example\s+([^\r\n]*)/) || [])[1] || ''
        const returns = (jsDocComment.match(/@returns\s+([^\r\n]*)/) || [])[1] || ''

        // Add the extracted information to the Markdown content
        markdownContent += `### ${functionName}\n`
        markdownContent += `${description}\n\n`
        if (example) {
          markdownContent += '```js [js]\n' + example + '\n' + '```\n\n'
        }
        if (returns) {
          markdownContent += '```html [returns]\n' + returns + '\n' + '```\n\n'
        }
      }
    })

    markdownContent = markdownContent.replace(/\n\n\n/g, '\n\n')

    // Define the output path for the Markdown file for this TypeScript file
    const outputFilePath = path.resolve('./content/2.functions', `${path.basename(tsFile, '.ts')}.md`)

    // Write the Markdown content to a file
    fs.writeFileSync(outputFilePath, markdownContent)

    console.log('Markdown documentation generated for:', tsFile, 'at:', outputFilePath)
  }
})
