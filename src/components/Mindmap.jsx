import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  // Trung tâm
  {
    id: "1",
    type: "input",
    data: { label: "Nhận thức luận duy vật biện chứng" },
    position: { x: 300, y: 0 },
    style: {
      background: "linear-gradient(135deg, #c1121f, #7209b7)",
      color: "#fff",
      border: "none",
      padding: 10,
      borderRadius: 10,
      fontWeight: 700,
      fontSize: "1.1rem",
    },
  },

  // Lý luận nhận thức
  {
    id: "2",
    data: { label: "A. Lý luận nhận thức" },
    position: { x: 50, y: 150 },
    style: {
      background: "#fde2e4",
      border: "2px solid #c1121f",
      borderRadius: 10,
      padding: 10,
    },
  },
  // Thực tiễn
  {
    id: "3",
    data: { label: "B. Thực tiễn" },
    position: { x: 500, y: 150 },
    style: {
      background: "#e0b1cb",
      border: "2px solid #7209b7",
      borderRadius: 10,
      padding: 10,
    },
  },

  // Nếu tách rời nhau
  {
    id: "4",
    data: { label: "❌ Khi tách rời nhau" },
    position: { x: 50, y: 320 },
    style: {
      background: "#ffe5b4",
      border: "2px solid #f77f00",
      borderRadius: 10,
      padding: 10,
      fontWeight: 600,
    },
  },
  {
    id: "5",
    data: { label: "Lý luận xa rời thực tế → Giáo điều, trừu tượng" },
    position: { x: -100, y: 430 },
    style: {
      background: "#fff3bf",
      borderRadius: 10,
      padding: 10,
    },
  },
  {
    id: "6",
    data: { label: "Thực tiễn không có định hướng → Mù quáng, sai lầm" },
    position: { x: 200, y: 430 },
    style: {
      background: "#fff3bf",
      borderRadius: 10,
      padding: 10,
    },
  },

  // Khi kết hợp biện chứng
  {
    id: "7",
    data: { label: "✅ Khi thống nhất biện chứng" },
    position: { x: 500, y: 320 },
    style: {
      background: "#d8f3dc",
      border: "2px solid #2d6a4f",
      borderRadius: 10,
      padding: 10,
      fontWeight: 600,
    },
  },
  {
    id: "8",
    data: {
      label: "Thực tiễn là cơ sở, động lực, mục đích của nhận thức",
    },
    position: { x: 350, y: 430 },
    style: {
      background: "#b7e4c7",
      borderRadius: 10,
      padding: 10,
    },
  },
  {
    id: "9",
    data: {
      label: "Nhận thức đúng đắn → Hướng dẫn thực tiễn hiệu quả hơn",
    },
    position: { x: 650, y: 430 },
    style: {
      background: "#b7e4c7",
      borderRadius: 10,
      padding: 10,
    },
  },

  // Kết quả chung
  {
    id: "10",
    type: "output",
    data: {
      label:
        "➡️ Nhận thức và thực tiễn thống nhất → Thúc đẩy tiến bộ xã hội, hoàn thiện con người",
    },
    position: { x: 300, y: 580 },
    style: {
      background: "linear-gradient(135deg, #2d6a4f, #95d5b2)",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      padding: 12,
      fontWeight: 600,
      textAlign: "center",
    },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },

  // Liên hệ qua lại giữa lý luận và thực tiễn
  { id: "e2-3", source: "2", target: "3", animated: true, label: "Tác động qua lại" },
  { id: "e3-2", source: "3", target: "2", animated: true, label: "Bổ sung và kiểm nghiệm" },

  // Khi tách rời nhau
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", type: "smoothstep" },
  { id: "e4-6", source: "4", target: "6", type: "smoothstep" },

  // Khi kết hợp
  { id: "e2-7", source: "2", target: "7", animated: true },
  { id: "e3-7", source: "3", target: "7", animated: true },
  { id: "e7-8", source: "7", target: "8", type: "smoothstep" },
  { id: "e7-9", source: "7", target: "9", type: "smoothstep" },

  // Kết quả chung
  { id: "e8-10", source: "8", target: "10", animated: true },
  { id: "e9-10", source: "9", target: "10", animated: true },
];

const Mindmap = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "650px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      }}
    >
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap
          nodeColor={(node) => {
            switch (node.id) {
              case "1":
                return "#c1121f";
              case "2":
                return "#fbb1bd";
              case "3":
                return "#e0b1cb";
              case "7":
                return "#b7e4c7";
              case "4":
                return "#ffe5b4";
              default:
                return "#dee2e6";
            }
          }}
        />
        <Controls />
        <Background color="#aaa" gap={20} />
      </ReactFlow>
    </div>
  );
};

export default Mindmap;