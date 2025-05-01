
export function Input({ className = '', ...props }) {
  return (
    <input
      className={`bg-gray-900 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 ${className}`}
      {...props}
    />
  );
}
