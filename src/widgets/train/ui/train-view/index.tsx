import { Application } from "@pixi/react";
import { Canvas } from "@widgets/train/scene";

export const TrainView = () => {
  return (
    <Application resizeTo={window}>
      {/* 브라우저 크기에 따라서 pixi canvas 크기도 변경하라 */}
      <Canvas />
    </Application>
    // new Application() 해줌. pixi의 application 생성. => pixi 엔진, canvas, stage, 렌더러 등등이 자동 생성됨.
  );
};
