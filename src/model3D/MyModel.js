function MyModel() {
  const modelData = {
    width: 200,
    height: 200,
    renderer: 'webgl',
    cameraPosition: [0, 0, 400],
    models: [
      {
        name: 'cube',
        geometry: {
          type: 'box',
          args: [100, 100, 100],
        },
        position: [0, 0, 0],
        material: {
          color: 0xff0000,
        },
      },
    ],
  };

  return (
    <View3D
      width={modelData.width}
      height={modelData.height}
      renderer={modelData.renderer}
      cameraPosition={modelData.cameraPosition}
      models={modelData.models}
    />
  );
}

export default MyModel;
