import type OpenAI from 'openai'
import { dadJoke, dadJokeToolDefinition } from './tools/dadJoke'
import {
  generateImage,
  generateImageToolDefinition,
} from './tools/generateImage'
import { movieSearch, movieSearchToolDefinition } from './tools/movieSearch'
import { reddit, redditToolDefinition } from './tools/reddit'

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
  }

  switch (toolCall.function.name) {
    case generateImageToolDefinition.name:
      const image = await generateImage(input)
      return image

    case dadJokeToolDefinition.name:
      return dadJoke(input)

    case redditToolDefinition.name:
      return reddit(input)

    case movieSearchToolDefinition.name:
      return movieSearch(input)

    default:
      throw new Error(`Unknown tool: ${toolCall.function.name}`)
  }
}
