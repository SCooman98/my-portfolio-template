import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ContentData } from "@/types/content";
// Import default content as fallback
import { content as defaultContent } from "@/data/content";

const ContentContext = createContext<ContentData>(defaultContent);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentData>(defaultContent);

  useEffect(() => {
    // Fetch the live data.json file that the CMS writes to
    fetch("/content/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load content");
        return res.json();
      })
      .then((data) => {
        // Merge with default content to ensure all fields exist
        setContent({ ...defaultContent, ...data });
      })
      .catch((err) => {
        console.warn("Could not load live content, using default:", err);
      });
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
