export const colors = [
  "bg-[#712c4a57] text-[#ff006e] border-[1px] border-[#ff006faa]", // Pink
  "bg-[#ffd60a2a] text-[#ffd60a] border-[1px] border-[#ffd60abb]", // Yellow
  "bg-[#2a9d8f2a] text-[#2a9d8f] border-[1px] border-[#2a9d8fbb]", // Teal
  "bg-[#2646532a] text-[#264653] border-[1px] border-[#264653bb]", // Deep Blue
  "bg-[#e76f512a] text-[#e76f51] border-[1px] border-[#e76f51bb]", // Orange
  "bg-[#6a994e2a] text-[#6a994e] border-[1px] border-[#6a994ebb]", // Green
  "bg-[#4361ee2a] text-[#4361ee] border-[1px] border-[#4361eebb]", // Indigo
  "bg-[#f4a2612a] text-[#f4a261] border-[1px] border-[#f4a261bb]", // Peach
  "bg-[#7209b72a] text-[#7209b7] border-[1px] border-[#7209b7bb]", // Purple
  "bg-[#ffba082a] text-[#ffba08] border-[1px] border-[#ffba08bb]", // Amber
];

export const GetColor = (color) => {
  if (color >= 0 && color < colors.length) {
    return colors[color];
  }
  return colors[0];
};
