import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { geoCentroid, geoBounds } from 'd3-geo';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface QuizMapRendererProps {
  targetCountryId: string | null;
}

export const QuizMapRenderer: React.FC<QuizMapRendererProps> = ({ targetCountryId }) => {
  const [position, setPosition] = useState({ coordinates: [0, 0] as [number, number], zoom: 1 });
  const [geographiesData, setGeographiesData] = useState<any[]>([]);

  // geographyデータが読み込まれた時に保存する
  const handleGeographiesLoad = (geographies: any[]) => {
    if (geographiesData.length === 0) {
      setGeographiesData(geographies);
    }
  };

  useEffect(() => {
    if (!targetCountryId || geographiesData.length === 0) {
      // ターゲットがない場合は全体表示に戻す
      if (!targetCountryId) {
        setPosition({ coordinates: [0, 20], zoom: 1 });
      }
      return;
    }

    const feature = geographiesData.find((geo) => geo.id === targetCountryId);
    if (feature) {
      // 重心（中心座標）を計算
      const centroid = geoCentroid(feature);
      
      // バウンディングボックスからズームレベルを簡易計算
      const bounds = geoBounds(feature);
      const dx = bounds[1][0] - bounds[0][0];
      const dy = bounds[1][1] - bounds[0][1];
      
      // 最大の幅・高さからズームレベルを決定 (適当な係数で調整)
      // 小さい国ほどズームし、ロシアなどの巨大な国はズームしすぎないようにする
      let newZoom = 1;
      const maxDim = Math.max(dx, dy);
      
      if (maxDim < 5) newZoom = 8;
      else if (maxDim < 10) newZoom = 5;
      else if (maxDim < 30) newZoom = 3;
      else if (maxDim < 60) newZoom = 1.5;
      else newZoom = 1;

      // 特殊対応（ロシア、カナダ、アメリカなどは飛び地やアラスカがあるため中心がずれたり大きすぎたりする）
      // geoCentroidはある程度よしなにやってくれるが、調整が必要な場合もある
      
      setPosition({ coordinates: centroid, zoom: newZoom });
    }
  }, [targetCountryId, geographiesData]);

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#e0f7fa', overflow: 'hidden' }}>
      <ComposableMap
        projectionConfig={{ scale: 140 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup 
          zoom={position.zoom} 
          center={position.coordinates}
          filterZoomEvent={() => {
            // ホイールでのズームを許可する
            return true;
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) => {
              // 描画時に一度だけデータを保存
              if (geographiesData.length === 0 && geographies.length > 0) {
                // setTimeoutを使ってレンダリングサイクル外でstate更新
                setTimeout(() => handleGeographiesLoad(geographies), 0);
              }

              return geographies.map((geo) => {
                const isTarget = geo.id === targetCountryId;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isTarget ? "#ff5252" : "#ECEFF1"}
                    stroke="#BDBDBD"
                    strokeWidth={0.5 / position.zoom} // ズームレベルに応じて線を細くする
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: isTarget ? "#ff5252" : "#D6D6DA" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              });
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
