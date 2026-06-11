export const Canvas = () => {
  return (
    <pixiContainer>
      {/* div태그 같은 거. 안에 img 같은 거 넣듯이 */}
      <pixiGraphics
        // div style={{}} 같은 느낌.
        draw={(g) => {
          // const g = new Graphics()를 실행하고
          // 그 위에 그림을 그릴 수 있게 해 주는 함수
          g.clear();
          // 기존 그림 제거 (타이머 함수에 클리어함수처럼. 리렌더 시 계속 겹쳐지는 것을 방지함.)
          g.rect(0, 0, 640, 360);
          // width 640, height 360의 사각형 생성.
          g.fill("#87ceeb");
          // 색 채우기
        }}
      />
    </pixiContainer>
  );
};
