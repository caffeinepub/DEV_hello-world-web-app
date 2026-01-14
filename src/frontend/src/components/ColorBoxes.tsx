export function ColorBoxes() {
  const boxes = [
    { id: 1, color: 'box-red', label: 'Red' },
    { id: 2, color: 'box-blue', label: 'Blue' },
    { id: 3, color: 'box-green', label: 'Green' },
    { id: 4, color: 'box-yellow', label: 'Yellow' },
    { id: 5, color: 'box-purple', label: 'Purple' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {boxes.map((box, index) => (
          <div
            key={box.id}
            className={`${box.color} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-8`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'backwards',
            }}
          >
            <div className="h-48 flex items-center justify-center">
              <span className="text-white text-2xl font-bold drop-shadow-lg">
                {box.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
