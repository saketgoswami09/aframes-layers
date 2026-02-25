import CanvasBoard from "./components/CanvasBoard";
import ControlsPanel from "./components/ControlsPanel";
import { LayersPanel } from "./components/LayersPanel";

export default function Home() {
  return (
    <div>
      <CanvasBoard />
      <ControlsPanel />
      <LayersPanel />
    </div>
  );
}
