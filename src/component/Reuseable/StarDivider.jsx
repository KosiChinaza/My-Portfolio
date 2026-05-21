/**
 * Decorative horizontal divider with a centered purple gradient line.
 * Matches the StarDivider pattern from the original codebase.
 */
export default function StarDivider({ darkMode }) {
  return (
    <div className="flex items-center justify-center py-2 px-6">
      <div
        className={`flex-1 h-px ${
          darkMode
            ? "bg-gradient-to-r from-transparent via-purple-900/60 to-transparent"
            : "bg-gradient-to-r from-transparent via-purple-200 to-transparent"
        }`}
      />
      <span className="mx-4 text-purple-600 text-xs">✦</span>
      <div
        className={`flex-1 h-px ${
          darkMode
            ? "bg-gradient-to-r from-transparent via-purple-900/60 to-transparent"
            : "bg-gradient-to-r from-transparent via-purple-200 to-transparent"
        }`}
      />
    </div>
  );
}
