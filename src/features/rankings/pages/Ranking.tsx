import PlayerTable from "../components/PlayerTable"
import { players } from "../mock/DummyPlayers"

import { columns } from "../components/Columns"

export default function Ranking() {
  return (
    <div className="container mx-auto py-10">
      <PlayerTable columns={columns} data={players} />
    </div>
  )
}