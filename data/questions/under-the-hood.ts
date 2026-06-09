import type { UnderTheHoodQuestion } from '../questions';

export const underTheHoodQuestions: UnderTheHoodQuestion[] = [
  {
    id: "uth-d1-1",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    imageUrl: "https://picsum.photos/seed/uth-d1-1/800/450",
    items: [
      { label: "File type", value: "JPEG" },
      { label: "Camera model", value: "iPhone 14 Pro" },
      { label: "Date & time taken", value: "[NOT FOUND — metadata stripped]" },
      { label: "GPS location", value: "[NOT FOUND]" },
      { label: "Reverse image search", value: "No prior appearances found" },
    ],
    correctFlagIndex: 2,
    explanation:
      "[PLACEHOLDER] A smartphone photo always embeds a timestamp in its EXIF metadata unless it is deliberately removed. Missing date metadata is a red flag — it suggests the image was processed in a way that stripped the original data.",
  },
  {
    id: "uth-d1-2",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    imageUrl: "https://picsum.photos/seed/uth-d1-2/800/450",
    items: [
      { label: "File type", value: "PNG" },
      { label: "Software", value: "Adobe Photoshop 25.0" },
      { label: "Date created", value: "2024-03-12 09:14:02" },
      { label: "Original camera", value: "[NOT FOUND — no camera data]" },
      {
        label: "Reverse image search",
        value: "Original photo found: Reuters, Jan 2022",
      },
    ],
    correctFlagIndex: 4,
    explanation:
      "[PLACEHOLDER] The reverse image search is the decisive red flag — it shows the image appeared two years earlier with Reuters, meaning the 'current' context is false. The Photoshop metadata confirms editing.",
  },
  {
    id: "uth-d1-3",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    imageUrl: "https://picsum.photos/seed/uth-d1-3/800/450",
    items: [
      { label: "File type", value: "JPEG" },
      { label: "Camera model", value: "Canon EOS R5" },
      { label: "Date taken", value: "2024-11-03 14:22:17" },
      { label: "GPS location", value: "51.5074° N, 0.1278° W (London, UK)" },
      {
        label: "Reverse image search",
        value: "Same image found on three sites, all posted same day",
      },
    ],
    correctFlagIndex: 4,
    explanation:
      "[PLACEHOLDER] Three simultaneous postings on the same day is a red flag — it suggests coordinated distribution rather than organic sharing. Legitimate breaking news photos typically appear first on one news agency before spreading.",
  },
  {
    id: "uth-d2-1",
    type: "under-the-hood",
    xp: 80,
    difficulty: 2,
    imageUrl: "https://picsum.photos/seed/uth-d2-1/800/450",
    items: [
      { label: "File type", value: "JPEG" },
      { label: "Camera model", value: "Samsung Galaxy S23" },
      { label: "Date taken", value: "2024-07-14 08:32:11" },
      { label: "GPS location", value: "48.8566° N, 2.3522° E (Paris, France)" },
      { label: "Editing software", value: "Lightroom Mobile 8.1" },
      {
        label: "Reverse image search",
        value: "Image appears on 47 sites; earliest: Reuters, 2024-07-14",
      },
    ],
    correctFlagIndex: 5,
    explanation:
      "[PLACEHOLDER] At first glance, all metadata appears clean. The red flag is the reverse image search: 47 sites with the earliest appearance on Reuters. If Reuters published it first, why is it being presented as exclusive original content? Widespread same-day distribution suggests repurposing with false context.",
  },
];
