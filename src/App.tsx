import Turntable from "./components/Turntable";
import type { Track } from "./types";

const tracks: Track[] = [
  { id: 1, title: "Features Songs - Netl Rito Songs", duration: "0:50" },
  { id: 2, title: "Reason Songs - Dart", duration: "6:00" },
  { id: 3, title: "Not-Downs From Up - Lasstly Viongs", duration: "3:35" },
  {
    id: 4,
    title: "Reason Songs - The Lover Before Lave Overs",
    duration: "3:33",
  },
];

function App() {
  return <Turntable tracks={tracks} />;
}

export default App;
