export const World = () => {
  return (
    <pixiContainer>
      <pixiGraphics
        draw={(g) => {
          g.clear();

          g.rect(0, 0, 640, 360);
          g.fill("#87ceeb");
        }}
      />
    </pixiContainer>
  );
};
