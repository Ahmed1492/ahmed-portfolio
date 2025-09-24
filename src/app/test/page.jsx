"use client";
// app/test/page.tsx
export default function TailwindTest() {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-4xl font-bold text-black dark:text-white">
        Tailwind Test Page
      </h1>

      <div className="bg-white dark:bg-black p-4 rounded shadow">
        <p className="text-lg text-gray-800 dark:text-gray-200">
          This box should change with dark mode.
        </p>
      </div>

      <button
        onClick={() => {
          const html = document.documentElement;
          html.classList.toggle("dark");
          localStorage.setItem(
            "theme",
            html.classList.contains("dark") ? "dark" : "light"
          );
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
