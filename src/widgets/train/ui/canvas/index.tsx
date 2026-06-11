import { Application } from "@pixi/react";
import { World } from "@widgets/train/scene";

export const TrainScene = () => {
  return (
    <Application resizeTo={window}>
      <World />
    </Application>
  );
};
