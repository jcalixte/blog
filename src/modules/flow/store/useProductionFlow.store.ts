import { pinia } from "@/store/store"
import { defineStore } from "pinia"
import { nanoid } from "nanoid"

interface Team {
  id: string
  name: string
  intention: string
  responsible: string
  prerequisites: string[]
  outputs: string[]
}

type NewTeam = Omit<Team, "id">

interface State {
  teams: Team[]
}

const initialState: State = {
  teams: [
    {
      id: nanoid(),
      name: "In production",
      intention: "Deliver feature to the user",
      responsible: "Product owner",
      prerequisites: [],
      outputs: ["Users can use the app"],
    },
  ],
}

const useStore = defineStore("production-flow", {
  state: () => ({ ...initialState }),
  actions: {
    addTeam(newTeam: NewTeam) {
      this.$state.teams = [{ id: nanoid(), ...newTeam }, ...this.$state.teams]
    },
    removeTeam(id: string) {
      this.$state.teams = this.$state.teams.filter((team) => team.id !== id)
    },
  },
})

export const useProductionFlow = () => useStore(pinia)
