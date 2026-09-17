"use client";

import { useState } from "react";

const years = [
  { title: "Lorem 1", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { title: "Lorem 2", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { title: "Lorem 3", body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  { title: "Ipsum 4", body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { title: "Ipsum 5", body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem." },
];

export function StudyPlan() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="study-list">
      {years.map((year, index) => {
        const isOpen = open === index;
        return (
          <div className="study-item" key={year.title}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{year.title}</span>
              <span aria-hidden="true">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <p>{year.body}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
