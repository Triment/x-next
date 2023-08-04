import { graphql } from "../helpers/gql"

export const PUBSUB_CHANNEL = graphql(`subscription PubSubChannel($id: ID = "") {
  exchange(id: $id) {
    from {
      id
      name
    }
    body
  }
}`)

export const JOIN_CHANNEL = graphql(`mutation JoinChannel($channelId: ID = "", $id: ID = "") {
  joinUser(channelId: $channelId, id: $id)
}`)

export const SEND_CHANNEL = graphql(`mutation SendChannel($channelId: ID = "", $body: String = "") {
  send(body: $body, channelId: $channelId)
}`)

export const NEW_USER = graphql(`query NewUser {
  newUser
}`)
export const USERS = graphql(`query Users {
  users {
    id
    name
  }
}`)
export const CHANNELS = graphql(`query Channels {
  channels {
    id 
    users {
      id
      name
    }
  }
}`)
export const GET_USER_TOKEN = graphql(`query GetUserToken {
  token(id: "cd32c3d5-830a-4031-b661-2d8e79eda74c")
}`)

export const UPLOAD_FILE = graphql(`mutation SaveFile($file: File = "") {
  saveFile(file: $file)
}`)