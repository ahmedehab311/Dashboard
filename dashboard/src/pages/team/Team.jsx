import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./data";
function Team() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Team;
