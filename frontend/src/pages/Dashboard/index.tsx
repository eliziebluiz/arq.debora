import { useState } from "react";
import Header from "../../components/header";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
    </div>
  );
}

export default Dashboard;
