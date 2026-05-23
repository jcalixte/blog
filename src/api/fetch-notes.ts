import { AtpAgent } from "@atproto/api"
import type { Note } from "~/api/note.type"

let serviceEndpoint: string | null = null
const did = "did:plc:4m3kouplb7s7xozjd3whinvl"

export const getServiceEndpoint = async () => {
  if (serviceEndpoint) {
    return serviceEndpoint
  }
  const response = await fetch(`https://plc.directory/${did}`)
  const {
    service: [{ serviceEndpoint: endpoint }],
  } = await response.json()

  if (!endpoint) {
    return null
  }

  serviceEndpoint = endpoint

  return endpoint
}

export const fetchNotes = async (): Promise<Note[]> => {
  const endpoint = await getServiceEndpoint()
  const agent = new AtpAgent({ service: endpoint })

  const {
    data: { records },
  } = await agent.com.atproto.repo.listRecords({
    repo: did,
    collection: "site.standard.document",
    limit: 50,
  })

  return (records || []).map((record) => record.value)
}
