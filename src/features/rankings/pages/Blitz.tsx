import PlayerTable from "../components/PlayerTable"
import { blitz } from "../mock/DummyPlayers"
import { columns } from "../components/Columns"

export default function Blitz() {
  return (
    <div className="container mx-auto py-10">
      <PlayerTable columns={columns} data={blitz} />
    </div>
  )
}