
export function Button({ children, ...props }) {
  return (
    <button
      className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-xl"
      {...props}
    >
      {children}
    </button>
  );
}
